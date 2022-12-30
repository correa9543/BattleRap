/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

dbVars = {
  env:{
    'MYSQL_HOST': 'localhost',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'battle_rap',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': 'YE2n4qh4wV',
  }
}

module.exports = nextConfig
