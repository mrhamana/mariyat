import './Login.css'
import { LoginBox } from '../components/LoginBox'
import { Link } from 'react-router-dom';
function Login(){

    return(
        <div className='login'>
            <LoginBox/>
            
        </div>

    )
}

export default Login;