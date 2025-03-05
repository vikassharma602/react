import React from 'react'

function JavaScript() {
    const name = "Radha Kishori "
    const x = 10;
    const y = 20;

    function sum(a,b,c){
        
        return a+b*c;
    }
 
    function operation (a,b,op){
        if(op=="+"){
            return a+b;
        }
        else if(op=='-'){
            return a-b;

        }
        else
          return a*b;
    }  
    
    //Object

    const userObject={
        name : "Vikas Sharma",
        email : "vikas602@gmail.com",
        age : 29,


    }
    
    // Array 
    const userarray=['vikas','aman','radhaKishori']

    // imgae variable 
    let path="https://www.google.com/search?q=dog&sca_esv=12555c0b9fcc47a6&udm=2&sxsrf=AHTn8zp3udyWRNthHLCFntMC9GrmzPbNgw%3A1740745866818&ei=iqzBZ_e4MaiM4-EP4-7kmQE&ved=0ahUKEwj3paTYr-aLAxUoxjgGHWM3ORMQ4dUDCBE&uact=5&oq=dog&gs_lp=EgNpbWciA2RvZzINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIKEAAYgAQYQxiKBTIIEAAYgAQYsQMyChAAGIAEGEMYigVI5hVQzgFY3Q5wAngAkAEBmAGoAqAB3QmqAQMyLTW4AQPIAQD4AQGYAgWgAu8FqAIGwgIHECMYJxjJAsICBhAAGAcYHsICChAjGCcYyQIY6gKYAxOIBgGSBwUyLjAuM6AHlBk&sclient=img#vhid=Zcg-2Pqp8jFSiM&vssid=mosaic"
  return (
    <div>
            <h2>{userObject.email} </h2>
            <h2> {userarray[0]} </h2>
            <h3> Name : {name}</h3>
            <h3> {name?name:"user not found "} </h3>
            <h5>sum of x+ y = {sum(20,20,5)} </h5>
            <h3>operation : {operation(10,20,"")}</h3>
            
            <img src={path} />
            <h6>----------------------------------------------------</h6>

    </div>
  )
}

export default JavaScript
