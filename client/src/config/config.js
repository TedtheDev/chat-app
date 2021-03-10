const CONFIG = { 
    development: {
        apiServiceURL: 'http://api.chat-app.com:8080'
    },
    production: {
        apiServiceURL: ''
    }
}

const environmentConfig = CONFIG[process.env.NODE_ENV || 'production'];

export default environmentConfig;