import { Button } from "../components/Button"
import Typebar from "../components/Typebar"
import { textAPI } from "../api/home.js"
import './Chat.css'
export default function Chat(){
    return (
        <div className="chatpage">
            <div className="forgeneral">
                <div className="fortaskbar">
                    <p>This is for meunus and stuff. dont worry about it for now man</p>
                </div>
                <div className="formessage">
                    <p>{textAPI}</p>
                </div>
                
            </div>
            <div className="forchat" style={Typestyle}>
                <Button text='For Chatting' ></Button>
                <Typebar/>
                <Button text='Send' ></Button>

            </div>

            
        </div>
    )
}


const Typestyle={
    display:'flex',
    justifyContent:'center',
   
   
}