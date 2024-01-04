const Movie=require('../models/movie.model')

// --------Read ALL
// findAllMovie
module.exports.findAllMovie=(req,res)=>{
    Movie.find()
    .then(allMovies=>{
        console.log("all movies from db",allMovies)
        res.status(200).json({data:allMovies,message:"all movies list",ok:true})
    })
    .catch(error=>{
        console.log(error);
        res.status(404).json({error})
    })
}

// --------Read One
// findOneMovie
module.exports.findOneMovieById=(req,res)=>{
    Movie.findById({_id:req.params.id})
    .then(oneMovie=>{
        console.log("movie found from db",oneMovie)
        if(!oneMovie) {
            res.status(404).json({ error:"Movie Not Found", ok:false })
        }else{
            res.status(200).json({ data: oneMovie, message: 'Movie Found', ok: true })
        }
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({error})
    })
}
// --------Create
// createNewMovie
module.exports.createNewMovie=(req,res)=>{
    Movie.create(req.body)
    .then(NewMovie=>{
        console.log("movie addded",NewMovie)
        res.status(201).json({data:NewMovie,message:"movie created",ok:true})
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({error})
    })
}
// --------Update
// updateOneMovie
module.exports.updateMovie=(req,res)=>{
    Movie.findOneAndUpdate({_id:req.params.id},req.body,  {new:true, runValidators:true})
    .then(updatedMovie=>{
        console.log("movie updated",updatedMovie)
        res.status(200).json({data:updatedMovie,message:"movie updated",ok:true})
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({error})
    })
}
// --------Delete
// deleteOneMovie
module.exports.deleteOneMovie = (req,res) => {
    Movie.findByIdAndDelete({_id: req.params.id})
    .then(deletedMovie => {
        console.log("Deleted Movie", deletedMovie);
        res.status(200).json({ data: deletedMovie, message: 'Movie deleted with success', ok: true })
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error })
    })
}