/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {

    PGHOST: 'ep-odd-sea-221878.us-east-2.aws.neon.tech',
    PGDATABASE: 'neondb',
    PGUSER: 'ansariwaqas310',
    PGPASSWORD: 'fieX6Ucj0YlP',
  },
}

module.exports = nextConfig
