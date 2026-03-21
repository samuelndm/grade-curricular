/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const isDomainRedirectEnabled = process.env.DOMAIN_REDIRECT_ENABLED === 'true';
const domainRedirectTarget =
  process.env.DOMAIN_REDIRECT_TARGET || 'https://www.guiadouniversitario.com/';

const nextConfig = {
  async redirects() {
    if (!isProduction || !isDomainRedirectEnabled) {
      return [];
    }

    return [
      {
        source: '/:path((?!health$|health/$).*)',
        destination: domainRedirectTarget,
        permanent: true,
      },
    ];
  },

  async rewrites() {
    const apiOrigin = process.env.API_ORIGIN || 'http://localhost:8080';

    return [
      {
        source: '/api/:path*',
        destination: `${apiOrigin}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
