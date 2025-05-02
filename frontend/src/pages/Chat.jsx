import { Button } from "../components/Button"
import Typebar from "../components/Typebar"
import './Chat.css'
export default function Chat(){
    return (
        <div className="chatpage">
            <div className="forgeneral">
                <div className="fortaskbar"></div>
                <div className="formessage"></div>
                
            </div>
            <div className="forchat" style={Typestyle}>
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