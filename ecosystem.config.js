module.exports = {
    apps: [
      {
        name: 'personal-site',
        exec_mode: 'fork',
        instances: 1,
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }