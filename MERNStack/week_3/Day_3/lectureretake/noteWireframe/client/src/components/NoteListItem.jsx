import React from 'react'
import noteStyle from './NoteListItem.module.css'
import {Link,useNavigate} from 'react-router-dom'

const NoteListItem = ({note,deleteNote}) => {
  const navig=useNavigate()
  return (
    <div className={noteStyle.note}>
        <h1 className='display-3 fst-italic'
        onClick={()=>navig(`/notes/${note._id}`)}
        >{note.isImportant&&"📍"}{note.title}</h1>
        <p>{note.content}</p>
        <div className="d-flex justify-content-between">
            <p>{note.createdAt}</p>
            <div className='text-right'>
                <Link className={`${noteStyle.editBtn} btn mx-2`} to={`/notes/${note._id}/edit`}>Edit</Link>
                <Link className={`${noteStyle.deleteBtn} btn mx-2`} onClick={()=>deleteNote(note._id)}>Delete</Link>
            </div>
        </div>
        
    </div>
  )
}

export default NoteListItem