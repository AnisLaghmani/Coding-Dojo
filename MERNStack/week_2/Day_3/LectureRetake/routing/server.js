
const express= require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const routes=require('./routes/routes')
routes(app)
// ------------------
app.listen(8000,()=>{
    console.log('>>>>>>SERVER IS RUNNING<<<<<<<');
})