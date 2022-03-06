require('dotenv').config()

module.exports = {
  client: {
    includes: ['./src/**/*.tsx', './src/**/*.ts'],
    service: {
      name: 'graphql',
      url: process.env.REACT_APP_PIPEFY_API_URL,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_PIPEFY_API_TOKEN}`
      },
    },
  },
}
