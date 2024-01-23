const {register,login} =require('../controllers/user.controller')

module.exports=app=>{
    // create Note /post
    app.post('/api/register',register)
    app.post('/api/login',login)

}