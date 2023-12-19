const mongoose = require('mongoose')
const { Schema } = mongoose;

const urlSchema = new Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },

    redirectURL :{
        type:String,
        required:true
    },

    userId:{
        type: Schema.Types.ObjectId,
        ref:'User',// referenced to user model
        required:true
    },

    visitHistory:[{timestamp :{type:Number}}],


},{timestamps : true})

module.exports = mongoose.model('url',urlSchema)