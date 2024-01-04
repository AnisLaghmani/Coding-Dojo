const Note = require('../models/note.model')

// All CRUD queries
//create
//read all
//read one
//update
//delete


//export
module.exports={
    createNote:(req,res)=>{
        Note.create(req.body)
        .then(newCreatedNote => {
            console.log("New  Note", newCreatedNote);
            res.status(201).json({ data: newCreatedNote, message: 'Note Created with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json(error.errors);
        })
    },
    findAllNotes:(req,res)=>{
        Note.find()
        .then(allNotes => {
            console.log("All Notes From DB", allNotes);
            res.status(200).json({ data: allNotes, message: 'All Notes List', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ error })
        })

    },
    findOneNoteById:(req,res)=>{
        Note.findById({ _id: req.params.id })
        .then(oneNote => {
            console.log("Note Found", oneNote);
            if(!oneNote) {
                res.status(404).json({ error:"Note Not Found", ok:false })
            }else{
                res.status(200).json({ data: oneNote, message: 'Note Found', ok: true })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error })
        })
    },
    updateOneNote:(req,res)=>{
        Note.findOneAndUpdate({ _id: req.params.id }, req.body,  {new:true, runValidators:true})
        .then(updatedNote => {
            if(!updatedNote) {
                res.status(404).json({ error:"Note Not Found", ok:false })
            }else{
                console.log("Note To Update", updatedNote);
                res.status(200).json({ data: updatedNote, message: 'Note Updated with success', ok: true })
            }
            

        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error })
        })
    },
    deleteOneNote:(req,res)=>{
        Note.findByIdAndDelete({_id: req.params.id})
        .then(deletedNote => {
            console.log("Deleted Note", deletedNote);
            res.status(200).json({ data: deletedNote, message: 'Note deleted with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error })
        })
    }
}