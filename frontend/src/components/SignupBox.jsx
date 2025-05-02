import './SignupBox.css'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { useState } from 'react'
import register from '../api/auth.Users.js'
export function SignupBox(){
    const [name,setname]=useState('')
    const [surname,setsurname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const handleinputchangename=(e)=>{
        setname(e.target.value)
    }

    const handleinputchangeasurname=(e)=>{
        setsurname(e.target.value)
    }

    const handleinputchangeemail=(e)=>{
        setemail(e.target.value)
    }

    const handleinputchangepassword=(e)=>{
        setpassword(e.target.value)
    }
    const submit=(e)=>{
        register(
            name,
            surname,
            email,
            password
        )
        setname('')
        setemail('')
        setsurname('')
        setpassword('')
        
    }
    return(
        <div className="signupBox">
            <div className="signupHeader"> 
                <h1>SignUp</h1>
            </div>
           
            <input 
            type="text" 
            placeholder="Name"
            value={name}
            onChange={handleinputchangename}
            />

            <input type='text' placeholder="Surname" value={surname} onChange={handleinputchangeasurname}/>
            <input type='email' placeholder="Email" onChange={handleinputchangeemail} value={email}/>
            <input type='password' placeholder="Password" onChange={handleinputchangepassword} value={password}/>
            
            <Button text='Sign Up' function={submit}></Button>
            <div className='login'>
                <p>Already Registered?</p>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}
