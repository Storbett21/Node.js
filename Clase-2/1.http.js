
const http = require('node:http');

const port = process.env.PORT ?? 1234
const processRequest = (req, res) => {
res.setHeader('Content-Type', 'text/html; charset=utf-8')


if (req.url == '/') {
    res.statusCode = 200 // ok
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
}  else if (req.url == '/Contacto'){
    res.statusCode = 200 // ok
    res.end('<h1>Contacto</h1>')
}  else {
    res.statusCode = 404 // not found
    res.end('<h1>Not Found</h1>')
}

}



const server = http.createServer(processRequest)


server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
})