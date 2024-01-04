const mongoose=require('mongoose');
require('dotenv').config()
module.exports = async ()=>{
    try{
        await mongoose.connect(process.env.uri);
        console.log(`🦋🦋🦋connection with database established successfully`)
    }catch(error){
        console.log('⛔⛔⛔',error)
    }
}


