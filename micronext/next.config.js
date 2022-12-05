/** @type {import('next').NextConfig} */
const { name } = require('./package');
const nextConfig = {
  // webpack: (config) => {
  //   config.output.library = `${name}-[name]`;
  //   config.output.libraryTarget = 'umd';
  //   config.output.jsonpFunction = `webpackJsonp_${name}`;
  //   config.output.globalObject = 'window';

  //   return config;
  // },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
