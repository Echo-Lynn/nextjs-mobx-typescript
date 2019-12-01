// pm2.config.js
module.exports = {
    apps: [
        {
            name: 'd_prod',
            script: 'yarn',
            args: 'start:prod',
            env: {
                NODE_ENV: 'production',
                DEPLOY_ENV: 'prod'
            }
        }
    ]
}
