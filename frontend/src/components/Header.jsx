import {Link} from 'react-router-dom'
import './Header.css'
import GlowingAnimation from './GlowingAnimation'
import AnimatedLogo from './AnimatedLogo'
export function Header(prop){
    return(
        <div className='headerstyle' style={{position:prop.position}}> 
            <GlowingAnimation/>
            <div className='logopos'>
                <Link to='/' className='logo'>
                    <AnimatedLogo/>
                </Link>
            </div>
            <div className='linkstyle'>
                
                <a href='/devs'  className='indivisuallinkstyle'>
                    <p>Devs</p>
                </a>
                <a href='/login' className='indivisuallinkstyle'>
                    <p>Login / Signup</p>
                </a>
                
            </div>
        </div>
    )
}

