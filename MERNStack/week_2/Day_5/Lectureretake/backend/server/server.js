require('dotenv').config()
const express=require('express')
const app=express();
const cors=require('cors');
// -----------------middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
// -----------DB
require('./config/mongoose.config')
// ----------Routes
require('./routes/movies.routes')(app)
// ------------------
app.listen(process.env.port,()=>{
    console.log("server is running on port",process.env.port)
})