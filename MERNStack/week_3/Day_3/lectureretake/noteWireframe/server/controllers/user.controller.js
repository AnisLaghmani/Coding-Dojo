const User = require('../models/user.model')

module.exports={
    register: (req,res)=>{
        User.create(req.body)
        .then(response=>res.status(201).json({response}))
        .catch(error => {res.status(500).json(error);})
    },
    login:(req,res)=>{
        User.findOne({email:req.body.email}).then(response=>res.status(200).json(response))
        .catch
    }
}