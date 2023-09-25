const withExportImages = require('next-export-optimize-images');

module.exports = withExportImages({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  }
})
