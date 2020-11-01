const path = require('path')

module.exports = {
  modify: (config, { dev, target }) => {
    config.resolve.modules.unshift(path.resolve(__dirname, './src'))

    return config
  },
  plugins: [
    {
      name: 'scss',
      options: {
        sass: {
          dev: {
            prependData: '@import "styles/common/common";'

          },
          prod: {
            prependData: '@import "styles/common/common";'
          }
        },
        postcss: {
          dev: {
            sourceMap: false,
            includePaths: [path.resolve(__dirname, 'src/')]
          },
          prod: {
            includePaths: [path.resolve(__dirname, 'src/')]
          }
        }
      }
    },
    {
      name: 'eslint'
    }
  ]
}
