const z = require('zod')

const movieSchema = z.object ({
    title: z.string({
        invalid_type_error: ' Movie Title must be a string',
        required_error:'Movie title is required'
    }),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    duration: z.number().min().max(),
    rate: z.number().min(0).max(10).default(5.5),
    poster: z.string().url({
    message: 'Poster must be a valiD URL'
}),
genre: z.array(
    z.enum(['Action','Adnventure','Comedy', 'Drama','Crime','Fantasy','Horror','Thriller','Sci-gi']),
{
    required_error: 'movie genre is required',
    invalid_type_error: 'movie type must be an array of enum genre'
}
)
})

function validateMovie (object){
    return movieSchema.safeParse(object)
}

module.exports = {validateMovie}