import React from 'react'
import {Login} from './importExport.jsx'
import Header from './Header.jsx'
import JavaScript from './JavaScript.jsx'
import CallEvent from './CallEvent.jsx'
import State from './State.jsx'
import Toggle from './Toggle.jsx'
import MultipleConditions from './MultipleConditions.jsx'
import Props from './Props.jsx'
import AdvProps from './AdvProps.jsx'
import InputField from './InputField.jsx'
import Wrapper from './Wrapper.jsx'
import Controlledcom from './Controlledcom.jsx'
import CheckBoxes from './CheckBoxes.jsx'

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
        <Toggle/>
        <MultipleConditions/>
        <Props/>
        <AdvProps/>
        <Wrapper/>
        <InputField/>
        <Controlledcom/>
        <CheckBoxes/>
        


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
            <h1>red</h1>
        </>
    )
}
export function user(){
    const username ="Vikas Sharma"
    return(<>
            Name : {username}   

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
