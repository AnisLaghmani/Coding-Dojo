import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

const Edit = () => {
  const {id}=useParams();
  const navigate=useNavigate()
  const [noteError,setNoteError]=useState({title:'',content:''})
  const [note,setNote]=useState({title:'',content:'',isImportant:false})
  const updateNote=(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/notes/`+id,note)
    .then(response=> {
      console.log(response.data)
      navigate('/notes')
    })
    .catch(error=>{
      
      let tempErrors={}
      for (let key of Object.keys(error.response.data.error.errors)){
        console.log(key,'-----',error.response.data.error.errors[key].message)
        tempErrors[key]=error.response.data.error.errors[key].message
      }
      setNoteError({...tempErrors})
    })
  }
  useEffect(()=>{
    axios.get('http://localhost:8000/api/notes/'+id)
    .then(response=> {
      console.log(response.data)
      setNote(response.data.data)
    })
    .catch(error=>{
      console.log(error.response.data)
    })
  },[id])
  return (
    <div className='container mt-5'>
      <form onSubmit={updateNote}>
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
        <button className='btn btn-warning w-50'>Update</button>
      </form>
    </div>
  )
}
export default Edit