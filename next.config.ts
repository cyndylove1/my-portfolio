import type { NextConfig } from "next";
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const nextConfig: NextConfig = {
   webpack: (config) => {
    config.plugins.push(new CaseSensitivePathsPlugin());
    return config;
  },
  
};

export default nextConfig;
