import React from 'react'
import {Login} from './importExport.jsx'

function Components() {
    // alert(sum());
  return (
    <div>
        <Fruit/>
        <Colors/>
        <Login/>
    </div>
  )
}
function Fruit(){
    return(
        <>
            <h1>apple {sum()} </h1>
        </>
    )
}

function Colors(){
    return(
        <>
            <h3>red</h3>
        </>
    )
}
function sum (){
    return 10+10
} 

export default Components
