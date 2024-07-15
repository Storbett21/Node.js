
const http = require('node:http');

const port = process.env.PORT ?? 1234

const server = http.createServer((req,res) => {
    console.log('request received:', req.url)
    res.end("Crearas Cosas grandiosas");
    
})


server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
})