const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/startup-app' : '/startup-app',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/startup-app/' : '/startup-app',
};

export default nextConfig;
