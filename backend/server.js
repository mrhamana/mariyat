import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/routes.js'
import cors from 'cors'
import connectDB from './db/connectDB.js'
import { connect } from 'mongoose'
dotenv.config()

const app=express()
app.use(cors())
app.use(express.json())

try{
    await connectDB()
    

}catch(e){
    console.log('error')
}

app.use('/api/auth',authRoutes)

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});