
let app = {
    user: '**',
    password: '**',
    server: '192.168.**.**',
    database: 'Project_Material',
    port: 1433,
    options: {
    encrypt: false // Use this if you're on Windows Azure
    },
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 3000
    }
};
module.exports = app;