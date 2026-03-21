# Guia Universitario

### `Details`
I developed this website to help the students from the State University of Bahia and the Federal Institute of Bahia. It contains the curriculum of every major in these universities in an organized and interactive way. It also has the possibility of adding more majors from other institutions.

- In "Flowchart", the student can see prerequisites and the subjects unlocked by a selected subject.
- In "My Curriculum", the student can see blocked and available subjects, then build a study plan based on completed and planned subjects.

You can make suggestions and warn about any bug.

### `Website`
http://grade-curricular.herokuapp.com/

### `Domain redirect (production)`
- Set `DOMAIN_REDIRECT_ENABLED=true` in production to enable a permanent `308` redirect.
- Set `DOMAIN_REDIRECT_TARGET=https://www.guiadouniversitario.com/` (defaults to this URL if omitted).
- `GET /health` stays local and returns the server health response (no redirect).

### `Technologies`
- Next.js
- Node.js
- Express
- PostgreSQL

### `Server database`
- The API now uses PostgreSQL.
- Configure `DATABASE_URL` in the server environment.
- Optional: set `DATABASE_SSL=true` for managed PostgreSQL providers that require SSL.
- To migrate existing MongoDB data to PostgreSQL, run:
  - `npm run migrate:mongo --prefix server`

<a href="https://ibb.co/RQHTztr" target="_blank"><img src="https://i.ibb.co/RQHTztr/EOn-Oz-Rz-W4-AAWjn0.jpg" alt="EOn-Oz-Rz-W4-AAWjn0" border="0"></a>
<a href="https://ibb.co/Y3KYYtm" target="_blank"><img src="https://i.ibb.co/Y3KYYtm/EOn-O0g-OWo-AAD-No.jpg" alt="EOn-O0g-OWo-AAD-No" border="0"></a> 
<a href="https://ibb.co/2NN7vZS" target="_blank"><img src="https://i.ibb.co/2NN7vZS/EOn-O0-IHXUAAy-OWQ.jpg" alt="EOn-O0-IHXUAAy-OWQ" border="0"></a> 
<a href="https://ibb.co/hC9HxDY" target="_blank"><img src="https://i.ibb.co/hC9HxDY/EOn-Ozsn-XUAAts-Xa.jpg" alt="EOn-Ozsn-XUAAts-Xa" border="0"></a>
