import React from 'react'

function CallEvent() {
     function callFun(){
            alert('vikas sharma ');
        }
      // Arrow function 
     const fruit = (name)=>{
          <>
            <h1>{name}</h1>
          </>
               
     }   

  return (
    <div>
            <button onClick={callFun} >Click me </button>
            <button onClick={()=>fruit("apple")} >Apple  </button>
            <button onClick={()=>fruit("Bannana")} >Banane </button>
            <h2>--------------------------------------------</h2>
            <br />

    </div>
  )
}

export default CallEvent
