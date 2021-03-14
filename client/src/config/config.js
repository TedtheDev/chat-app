const CONFIG = { 
    development: {
        apiServiceURL: 'https://api.chat-app.com:8443',
        domain: 'https://app.chat-app.com:3000'
    },
    production: {
        apiServiceURL: ''
    }
}

const environmentConfig = CONFIG[process.env.NODE_ENV || 'production'];

export default environmentConfig;