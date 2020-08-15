const path = require('path')

module.exports = {
  plugins: [
    {
      name: 'scss',
      options: {
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
