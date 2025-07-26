const EvetEmitter = require('events')
const { cursorTo } = require('readline')

const customeEmitter = new EvetEmitter
customeEmitter.on('response',(name,id)=>{
  console.log(`data recieved ${name} ${id}`)
})

customeEmitter.on('response',()=>{
  console.log('hell na')
})

customeEmitter.emit('response','sulabh',23)

