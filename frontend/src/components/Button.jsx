import { useState, useEffect } from 'react'
import './Button.css'   
export function Button(prop){
    const [background,setBackground]=useState('rgb(59, 245, 142)')
    const onMouseEnter =()=>{
        setBackground("rgb(121, 16, 134)")
    }
    const onMouseLeave=()=>{
        setBackground('rgb(59, 245, 142)')
    }
    return(
        <button className="button"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={prop.function}
        style={{backgroundColor:background}}
        >
            <div className='buttontext'>
                {prop.text}
            </div>
        </button>
    )
}

