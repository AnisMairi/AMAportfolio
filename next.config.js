/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils');
const { permanentRedirect } = require('next/navigation');
const path = require("path");

const nextConfig = {
  /*output: 'export',*/
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  }
};

module.exports = nextConfig
