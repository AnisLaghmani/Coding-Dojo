const mongoose =require ('mongoose');
const {isEmail}= require('validator');
const bcrypt=require('bcrypt');

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true,'Please enter your username.'],
        minlength:[3,'Please enter a valid username '],
        trim:true        
    },
    email:{
        type:String,
        validate:[isEmail,"Email is not valid"],
        // validate:[value=>/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value),"email is not valid"],
        unique:[true,'Email already exists.Try to login']
    },
    password:{
        type:String,
        required:[true,'password must be provided'],
        minlength:[6,"Password too short"]
    },
    // ConfirmPassword:{
    //     type:String,
    //     required:[true,'password must be provided'],
    //     minlength:[6,"Password too short"]
    // }
},{timestamps:true})
//confirm Password:

// 1-create a virtual property'confirm PW' with getter and setter
UserSchema.virtual('confirmPW').get(()=>this._confirmPW).set(value=>this._confirmPW=value)
// 2-validate password and confirm password
UserSchema.pre('validate',async function (next){
    console.log("inside password validation")
    console.log(this)
    if(this.password !== this.confirmPW){
        this.invalidate('confirmPW','Password must match')
    }
    next()
})
UserSchema.pre('save',async function (next){
    try{
        const hashedPassword= await bcrypt.hash(this.password,10);
        console.log('hashed password:',hashedPassword)
        this.password=hashedPassword;
        next();
    }catch(error){console.log("error while hashing",error)}
    
})

module.exports=mongoose.model('User',UserSchema);