import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import NoteListItem from '../components/NoteListItem'
const Home = (props) => {
  const [notes,setNotes]=useState([])
  const deleteNote=(noteId)=>{
    axios.delete('http://localhost:8000/api/notes/'+noteId)
    .then(response=>{
      console.log(response.data)
      const filteredNotes=notes.filter(note=>note._id !=noteId)
      setNotes(filteredNotes)})
    .catch(error=>console.log(error))
  }
  useEffect(()=>{
    axios.get('http://localhost:8000/api/notes')
    .then(response=>{
      setNotes(response.data.data)
    })
    .catch(error=>console.log(error));
  },[])
  return (
    <div className='container'>
      {notes.map(note=><NoteListItem note={note} key={note._id} deleteNote={deleteNote}/>)}
    </div>
  )
}

export default Home