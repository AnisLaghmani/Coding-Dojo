import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import MovieCard from './MovieCard'

const Home = () => {
    const [movies,setMovies]=useState([])
    const deleteMovie = (id) => {
        axios.delete('http://localhost:8000/api/movies/'+id)
        .then(response => {
            console.log(response)
            const filtredMovies = movies.filter(movie => movie._id != id)
            setMovies(filtredMovies)
        })
        .catch(error => console.log(error))
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/movies')
        .then(response=>{
            console.log(response.data.data)
            setMovies(response.data.data)
        })
        .catch(error=>{console.log(error)})
    },[])
  return (
    <div className='container p-3'>
        <div className='text-center'>
            <h1>All Movies</h1>
        </div>
        <div className='row gap-3'>
            {movies.map(movie=><MovieCard movie={movie} key={movie._id} deleteMovie={deleteMovie}/>)}
        </div>        
    </div>
  )
}

export default Home