import './LoginBox.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'
export function LoginBox(){

    return(
        <div className="login-box">
            <div className="login-box-header">
                <h1>Login</h1>
            </div>
            
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Button text='Login'></Button>
            <div className='signup'>
                <p>Don't have an account?</p>
                <Link to ='/signup'>Signup</Link>
            </div>
            
        </div>
    )
}