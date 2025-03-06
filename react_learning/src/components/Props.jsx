import React, { useState } from 'react'
import UserProps from './UserProps'
import College from './CollegeProps'
import Student from './StudentProps'


const Props = () => {
  //  let userName ="vikas sharma "
  //  let age = 27
  //  let email = "vikasSharma@gamil.com"

    let userObject={
      name:"vikas Sharma ",
      age:28,
      email:"vikasSharma7378@gmail.com"
    }
    let userObject2={
      name:"Anil Sharma ",
      age:32,
      email:"anilSharma7378@gmail.com"
    }
      // Props using array
     let CollegeNames=['IIT','NIT','MIT','JNU'] 

     //using state for button k click p change ho jae

     const[student,setStudent]=useState()

  return (
    <div>
        <h1>Props in React js </h1>
        {/* <UserProps name = {userName} age = {age} email={email} /> */}
        <UserProps user={userObject } />
        <UserProps user={userObject2 } />

        <College names= {CollegeNames}/>
        <hr />

        {/* For Students  => Button k onclick p value chnage kar de   */}
        {/* student k aandar value ho to hi show kare iss kaam liyaa hai 
        student  &&   */}
      { student && <Student name={student} />} 

      <button onClick={()=>setStudent("Bhasker")} >update student</button>


        
      
    </div>
  )
}

export default Props