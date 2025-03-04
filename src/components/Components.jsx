import React from 'react'
import {Login} from './importExport.jsx'
import Header from './Header.jsx'
import JavaScript from './JavaScript.jsx'
import CallEvent from './CallEvent.jsx'
import State from './State.jsx'

function Components() {
    // alert(sum());
  return (
    <div>
        <Header/>
        <Colors/>
        <Fruit/>
        <Login/>
        <Button/>
        <JavaScript/>
        <CallEvent/>
        <State/>

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
export function user(){
    const username ="Vikas Sharma"
    return(<>
            <h1>Name : {username}  </h1>

    </>)
}

function sum (){
    return 10+10
} 

function Button (){

    return(
        
            <button onClick={clickalert} >click me </button>
       
    )
}
function clickalert(){
       alert("vikas ")
}

export default Components
