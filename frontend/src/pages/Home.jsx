import {Header} from '../components/Header'
import './Home.css'
import { Link } from 'react-router-dom'
import ExoticBorder from '../components/ExoticBorder'
import AnimatedText from '../components/AnimatedText'
import AnMonsserat from '../components/AnMonsserat'
export function Home(){
    
    return (
        <div className='home' >
      
            <Header position='relative'/>
                    <div>
                        <AnMonsserat text='Welcome Peasants' fontSize='5.5em'/>
                    </div>
                    <div className='description'>
                        <AnimatedText text="   Site is dedicated to those who hate Muslims. Say with me, 'Fuck Muhammad and Fuck Allah.'
                        Those sons of bitches are nothing but pedophiles and rapists.Well anyways, welcome to the site. It's still under construction sooo if there's any bugs, there's a dev section where personal details are given. Use it to masturbate as much as you like. Happy hacking!" fontSize='5.5em'/>
                    </div>
                    <div className='tableofcontent'>
                        <h2>Table of Content</h2>
                    </div>
                    
                    <div className='content'>
                        <div className='chatRomm'>
                            <ExoticBorder>
                                <Link to='/chat'>
                                    
                                    <img src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.brmotDoTzzPa59L82D2vigHaHa%26pid%3DApi&f=1&ipt=f7f48e4793efa935c255aa177deec8064245b6caf6258aeb6e104e968e0a242f&ipo=images'} alt='chatRomm' className='chatRomm-img'/>
                                
                                        <h2 className='chatRomm-text'>Chat Room</h2>
                                        <p className='chatRomm-text'>This is a chat room. You can chat with your friends here.Yippie</p>
                                    
                                </Link>
                            </ExoticBorder>
                        </div>
                    </div>
                    <div >
                      
                    </div>
            </div>
    )
}

