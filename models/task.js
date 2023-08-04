const mongoose = require('mongoose')

const Taskmodel = new mongoose.Schema({
    name:{type: String,required:true,trim:true},
    completed:{type:Boolean,default:false}
})

module.exports = mongoose.model("Task",Taskmodel)