const express= require ('express')
const cors=require('cors')

//----- import environment variables (port)
const app = express();
require('dotenv').config()
//----add middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())
//-----import routes
require('./routes/note.routes')(app);
//-------connect with DB
require('./config/mongoose.config')();
// ----Run server
app.listen(process.env.port,()=>{
    console.log (`server is running on port ${process.env.port} \n URL: http://localhost:${process.env.port}`);
})
