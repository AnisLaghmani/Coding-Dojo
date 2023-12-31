const users=require('../models/model')
module.exports=(app)=>{
    // --------------HEALTH ROUTE
    app.get('/',(req,res)=>{
        res.status(201).json({message:'SERVER IS UP',ok:true})
    })
    // ------GET ALL
    app.get('/api/users',(req,res)=>{
        res.status(200).json({data:users , message:"all users list"})
    })
    // ------GET one
    app.get('/api/users/:id',(req,res)=>{
        console.log(req.params)
        const {id}=req.params;
        if (id<0 || id>users.length){
            res.status(404).json({message:"user not found",ok:false})
        } else{   res.status(200).json({data:users[id] ,message:"ID recived" ,ok:true})
        }
    })
    // ------Create User
    app.post('/api/users',(req,res)=>{
        // console.log(req.body)
        users.push(req.body)
        res.status(201).json({data:users,newUser:req.body ,message:"user created" ,ok:true})
        })
    // ------delete User
    app.delete('/api/users/:id',(req,res)=>{
        console.log(req.params)
        const {id}=req.params;
        const deletedUser=users[id];
        users.splice(id,1)
        res.status(200).json({data:users,deletedUser:deletedUser,message:"user deleted" ,ok:true})
        })
    // ------Create User
    app.put('/api/users/:id',(req,res)=>{
        const {id}=req.params;
        users[id]={...users[id],...req.body};
        res.status(200).json({data:users,updateUser:req.body ,message:"user updated" ,ok:true})
        })
}

