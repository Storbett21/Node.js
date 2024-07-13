// const http = require('node:http');

// const server = http.createServer((req,res) => {
//     console.log('request received')
//     res.end("hola mundo")
    
// })

// server.listen(1234, () => {
//     console.log('server listening on port 1234')
// })

// const http = require('node:http');

// const server = http.createServer((req,res) => {
//     console.log('request received')
//     res.end("hola mundo")
    
// })

// server.listen(0, () => {
//     console.log(`server listening on port http://localhost:${server.address().port}`)
// })
// truco para usar un puerto vacio

const puerto = process.env.PORT ?? 3000
const http = require('node:http');
const {findAvailablePort} = require('./free-port.js');

const server = http.createServer((req,res) => {
    console.log('request received')
    res.end("Crearas Cosas grandiosas");
    
})

findAvailablePort(puerto).then (port => {
server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
})
})

// con la app free-port importada