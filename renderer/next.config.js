module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer'
      config.node = {
        __dirname: true
      }
    }

    return config
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/grid',
        permanent: true
      },
      {
        source: '/home',
        destination: '/grid',
        permanent: true
      }
    ]
  },
  images: {
    domains: [
      'cdn2.steamgriddb.com'
    ]
  }
}
