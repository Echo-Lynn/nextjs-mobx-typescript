// pm2.config.js
module.exports = {
    apps: [
        {
            name: 'd_prod',
            script: 'yarn',
            args: 'run start:prod'
        }
    ]
}
