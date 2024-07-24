import express, { json } from 'express' // require -> commonJS
import cors from 'cors'
import { Moviesrouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'



// import fs from 'node:fs'

// const movies = JSON.parse(fs.readFileSync('./movies.json', 'utf-8')) 

// como leer un json en EsModules recomendad por ahora





const app = express()
app.use(json())
app.use (corsMiddleware())
app.disable('x-powered-by') // deshabilitar el header X-Powered-By: Express



// Todos los recursos que sean MOVIES se identifica con /movies
app.use('./movies', Moviesrouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})