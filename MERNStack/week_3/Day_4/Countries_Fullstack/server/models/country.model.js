const mongoose = require('mongoose')

const CountrySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "{PATH} is required !"],
        minlength:[3, '{PATH} length must be at least 3 🚫']
    },
    flag:{
        type:String,
        required:[true, "{PATH} is required !"],
        minlength:[8, '{PATH} length must be at least 8 🏳️']
    },
    independant:{
        type:Boolean,
        required:[true, "{PATH} is required !"]
    }
},{timestamps:true});

const Country = mongoose.model("Country",CountrySchema)
module.exports = Country;