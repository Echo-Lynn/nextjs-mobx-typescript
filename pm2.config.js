// pm2.config.js
module.exports = {
  apps: [
    {
      name: 'd_prod',
      script: 'yarn',
      args: 'run start:prod'
    }
  ],
  'deploy': {
    // "prod" is the environment name
    'prod': {
      'user': 'ubuntu',
      'key': '~/.ssh/id_rsa',
      'host': ['119.28.222.199'],
      'ssh_options': 'StrictHostKeyChecking=no',
      'ref': 'origin/DEPLOY_PROD',
      'repo': 'git@github.com:Echo-Lynn/nextjs-mobx-typescript.git',
      'path': '/data/www/nextjs-mobx-typescript',
      'post-deploy': 'yarn install; pm2 reload ./pm2.config.js'
    },
  }
}
