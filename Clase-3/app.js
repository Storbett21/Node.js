const express = require('express');
const movies = require('./movies.json');

const app = express();
app.disable('x-powered-by');


app.get('/movies', (req, res) => {
    const {genre} = req.query
if (genre) {
    const filteredMovies = movies.filter(
        movie => movie.genre.some(g => g.toLowerCase() == genre.toLowerCase())
    )
    return res.json(filteredMovies)
}
    res.json(movies)

})

app.get('/movies/:id', (req, res) => {   // como acceder al id de todas formas... path-to-regexp <-- biblioteca

    const { id } = req.params
    const movie = movies.find(movie => movie.id === id)
    if (movie) return res.json(movie)
    
    res.status(404).json({message: 'movie not found'})

})




const PORT = process.env.PORT ?? 1234

app.listen(PORT,() => {
console.log(`server listening on port http://localhost:${PORT}`)
})