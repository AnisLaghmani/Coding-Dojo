import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import noteStyle from '../components/NoteListItem.module.css'


const OneNote = () => {
  const [note,setNote]=useState({title:'',content:'',isImportant:false})
  const {id}=useParams()
  useEffect(()=>{
    axios.get('http://localhost:8000/api/notes/'+id)
    .then(response=> {
      console.log(response.data)
      setNote(response.data.data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[id])

  return (
    <div className={noteStyle.note}>
        <h1 className='display-3 fst-italic'>{note.isImportant&&"📍"}{note.title}</h1>
        <p>{note.content}</p>
        <div className="d-flex justify-content-between">
            <p>{note.createdAt}</p>
        </div>
    </div>
  )
}

export default OneNote