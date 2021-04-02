module.exports = {
    future: {
        webpack5: false,
    },
    env: {
        HOSTNAME: 'localhost',
        PORT: 3000,
        HOST: `http://localhost:3000`,
        API_URL: 'http://localhost:8000/'
    },
    serverRuntimeConfig: {},
    publicRuntimeConfig: {
        apiUrl: process.env.API_URL
    }
}