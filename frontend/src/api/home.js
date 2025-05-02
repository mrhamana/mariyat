import axios from 'axios'

export const textAPI= async()=>{
    try{
        const response=await axios.get('http://localhost:5000/')
        return response.data
    }catch(error){
        return "Error"
    }
}