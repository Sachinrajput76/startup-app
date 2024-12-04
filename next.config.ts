const nextConfig = {
  // output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/startup-app' : '/startup-app', // Use '/startup-app' in production mode
  assetPrefix: process.env.NODE_ENV === 'production' ? '/startup-app/' : '/startup-app', // Use '/startup-app/' in production
  trailingSlash: true,
  productionSourceMaps: false,
};

module.exports = nextConfig;
