/*
 * https://www.npmjs.com/package/node-ssh
 */

const { NodeSSH } = require('node-ssh')

const password = '2020'

const ssh = new NodeSSH()

ssh.connect({
  host: '192.168.0.100',
  username: 'fabio',
  port: 22,
  password,
  tryKeyboard: true,
}).then(() => {
  ssh
    .exec('/usr/bin/play', ['/home/fabio/mp3/bruxa.mp3'])
    // .execCommand('pwd', [])
    .then( r => { console.log('then', r) })
    .catch( () => {})
    .then( () => {
      // ssh.connection.destroy() 
      ssh.dispose()
    })
  
  return null
})

console.log('end')

// ssh.connect({
  // host: 'localhost',
  // username: 'steel',
  // privateKey: '/home/steel/.ssh/id_rsa'
// })
