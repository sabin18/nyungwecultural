/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
// Override the default webpack configuration
webpack: (config, { isServer }) => {
  const prefix = config.assetPrefix ?? config.basePath ?? '';
  config.module.rules.push({
    test: /\.mp4$/,
    use: [{
      loader: 'file-loader',
      options: {
        publicPath: `${prefix}/_next/static/media/`,
        outputPath: `${isServer ? '../' : ''}static/media/`,
        name: '[name].[hash].[ext]',
      },
    }],
  });

  
  return config;
},
}

module.exports = nextConfig

