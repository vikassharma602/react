import React from 'react'
import{useState} from 'react'
 

const Toggle = () => {
    const [display,setDisplay]=useState(0);
  return (
    <div>
            <h1> Toggle in react</h1>
            
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {
                display?<h3>vikas Sharma</h3>:null
            }
            
            <h3>---------------------------------------------------</h3>

    </div>
  )
}

export default Toggle