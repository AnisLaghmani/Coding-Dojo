import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate=useNavigate()
  const [noteError,setNoteError]=useState({title:'',content:''})
  const [note,setNote]=useState({title:'',content:'',isImportant:false})
  const createNote=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/api/notes',note)
    .then(response=> {
      console.log(response.data)
      navigate('/notes')
    })
    .catch(error=>{
      // console.log(error.response.data)
      let tempErrors={}
      for (let key of Object.keys(error.response.data)){
        console.log(key,'-----',error.response.data[key].message)
        tempErrors[key]=error.response.data[key].message
      }
      setNoteError({...tempErrors})
    })
  }
  return (
    <div className='container mt-5'>
      <form onSubmit={createNote}>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" onChange={e=>setNote({...note,title:e.target.value})} value={note.title}/>
          <span className='h4 text-danger'>{noteError.title&&noteError.title}</span>
        </div>
        <div className="form-group">
          <label htmlFor="">Content</label>
          <textarea className="form-control" cols="30" rows="3" onChange={e=>setNote({...note,content:e.target.value})} value={note.content}/>
          <span className='h4 text-danger'>{noteError.content&&noteError.content}</span>
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label" htmlFor="flexCheckDefault">Is Important?</label>
          <input className="form-check-input" type="checkbox"  id="flexCheckDefault" onChange={e=>setNote({...note,isImportant:e.target.checked})} checked={note.isImportant}/>
        </div>
        <button className='btn btn-success w-50'>Create</button>
      </form>
    </div>
  )
}

export default Create