import React, { useState } from 'react'



const Controlledcom = () => {

    //page k refresh se phle hi input ki value ko get karne k liye

    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")


  return (
    <div>   
            <hr />
            <h2>Controlled Components </h2>
            <form style={{border:"1px solid green ", padding:"10px" ,   borderRadius:"10px"}} action="">
                <input onChange={(event)=>setName(event.target.value)}
                 style={{padding:"10px"}} type="text" placeholder='Enter Name ' value={name} />
                <br /><br />
                <input onChange={(event)=>setPassword(event.target.value)}
                 style={{padding:"10px"}} type="Password" placeholder='Enter Password '
                 value={password} />
                <br /><br />

                <input onChange={(event)=>setEmail(event.target.value)}
                 style={{padding:"10px"}} type="text" placeholder='Enter email ' 
                 value={email} />
                <br /><br />
                <button>Submet</button>

                <br /><br />
                <button onClick={()=>{setName(''),setPassword(''),setEmail('')}} >Clear value</button>

                <br /><br />
                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>


            </form>
            
      
    </div>
  )
}

export default Controlledcom
