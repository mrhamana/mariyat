export default function Typebar(){
    return(
        <div >
            <input type='text'  style={Textstyle} placeholder="Type the message"></input>
        </div>
    )
}

const Textstyle={
    padding:'15px',
    width:'800px',
    backgroundColor:'gray',
    border:'1px solid black',
    borderRadius:'10px',
    fontSize:'1.2rem'
}