import axios from 'axios'

const register=async (userName, userSurname,userEmail,userPassword)=>{
    const name=userName
    const surname=userSurname
    const email=userEmail
    const password=userPassword

    try{
    axios.post('http://localhost:5000/api/auth/register',{
        name,
        surname,
        email,
        password
    })
    }catch(e){
        console.log('error')
    }

    
}

export default register