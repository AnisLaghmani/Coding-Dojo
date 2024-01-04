const {findAllMovie, createNewMovie, findOneMovieById, updateMovie, deleteOneMovie}=require('../controllers/movie.controller')
module.exports=(app)=>{
    app.get('/api/movies',findAllMovie)
    app.get('/api/movies/:id',findOneMovieById)
    app.post('/api/movies',createNewMovie)
    app.put('/api/movies/:id',updateMovie)
    app.delete('/api/movies/:id',deleteOneMovie)

}