/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_FIREBASE_API_KEY: process.env.NEXT_FIREBASE_API_KEY,
    NEXT_AUTH_DOMAIN: process.env.NEXT_AUTH_DOMAIN,
    NEXT_DATABASE_URL: process.env.NEXT_DATABASE_URL,
    NEXT_PROJECT_ID: process.env.NEXT_PROJECT_ID,
    NEXT_STORAGE_BUCKET: process.env.NEXT_STORAGE_BUCKET,
    NEXT_MESSAGING_SENDER_ID: process.env.NEXT_MESSAGING_SENDER_ID,
    NEXT_APP_ID: process.env.NEXT_APP_ID,
  },
};

module.exports = nextConfig;
