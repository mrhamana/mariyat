import express from 'express'
import authRoutes from './routes/routes.js'
import cors from 'cors'


const app=express()
app.use(cors())
app.use(express.json())

app.get('/api/auth/chat', (req, res) => {
    res.json({ message: 'Hello from server' });
});




app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});


