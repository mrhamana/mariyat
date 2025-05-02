import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    content:{type:String,required:true},
    userid:{type:String,required:true},
    clientOffset:{type:String,unique:true},
    createdAt: { type: Date, default: Date.now }

})

export const Message=mongoose.model('Message',messageSchema)
