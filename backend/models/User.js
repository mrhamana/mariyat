import mongoose from 'mongoose'

const UserSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        surname:{type:String,required:false},
        email:{type:String,required:true},
        password:{type:String,required:true}
    }


)

const User=mongoose.model('User',UserSchema)

export default User;