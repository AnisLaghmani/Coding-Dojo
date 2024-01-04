const mongoose =require ('mongoose');

const NoteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter your note Title.'],
        minlength:[3,'Please enter a valid  note title ']
    },
    content:{
        type:String,
        required:[true,'Please enter your note content.'],
        minlength:[10,'note content too short ']
    },
    isImportant:{
        type:Boolean,
        default:false

    }
},{timestamps:true})


module.exports=mongoose.model('Note',NoteSchema);