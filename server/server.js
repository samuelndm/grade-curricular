const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

const envLocalPath = path.join(__dirname, ".env.local");
const envPath = path.join(__dirname, ".env");

if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
}

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath, override: false });
}

const { initDb } = require("./db");

const app = express();
const port = Number.parseInt(process.env.PORT, 10) || 8080;
const clientPath = "../public";
const clientIndexPath = path.join(__dirname, clientPath, "index.html");
const bodyLimit = process.env.REQUEST_BODY_LIMIT || "10mb";
const isProduction = process.env.NODE_ENV === "production";
const isDomainRedirectEnabled = process.env.DOMAIN_REDIRECT_ENABLED === "true";
const domainRedirectTarget =
  process.env.DOMAIN_REDIRECT_TARGET || "https://www.guiadouniversitario.com/";

app.disable("x-powered-by");
app.use(express.json({ limit: bodyLimit }));
app.use(
  express.urlencoded({
    limit: bodyLimit,
    extended: true,
    parameterLimit: 10000,
  })
);

if (isProduction && isDomainRedirectEnabled) {
  app.use((req, res, next) => {
    if (
      req.method === "GET" &&
      (req.path === "/health" || req.path === "/health/")
    ) {
      next();
      return;
    }

    res.redirect(308, domainRedirectTarget);
  });
}

app.use(express.static(path.join(__dirname, clientPath)));
app.use(cors());

const institutionRouter = require("./routes/institution");
const courseRouter = require("./routes/course");
const subjectRouter = require("./routes/subject");

app.use("/api/institution", institutionRouter);
app.use("/api/course", courseRouter);
app.use("/api/subject", subjectRouter);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.get("*", (req, res) => {
  if (fs.existsSync(clientIndexPath)) {
    res.sendFile(clientIndexPath);
    return;
  }

  res.status(404).json({ message: "Not found" });
});

async function startServer() {
  try {
    await initDb();
    console.log("Connected to PostgreSQL");

    app.listen(port, () => {
      console.log("Listening at port " + port);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
