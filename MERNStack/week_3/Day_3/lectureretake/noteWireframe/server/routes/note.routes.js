const {createNote, findAllNotes, findOneNoteById, updateOneNote, deleteOneNote} =require('../controllers/note.controller')

module.exports=app=>{
    // create Note /post
    app.post('/api/notes',createNote)
    app.get('/api/notes',findAllNotes)
    app.get('/api/notes/:id',findOneNoteById)
    app.put('/api/notes/:id',updateOneNote)
    app.delete('/api/notes/:id',deleteOneNote)
}