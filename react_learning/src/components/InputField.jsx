import React, { useState } from 'react'


const InputField = () => {

    const [val,setVal]=useState("")
        
    return (
        <div>
        <hr />
            <h2>Get Input field Value </h2>
            <input  onChange={(event)=>setVal(event.target.value)}
            value={val}
            style={{padding:"10px",fontSize:'20px'}} type="text" />
            
            <br />
            <br />
            <h3>{val}</h3>
            <button onClick={()=>setVal("")} > Clear </button>
            


        </div>  
    )
}

export default InputField
