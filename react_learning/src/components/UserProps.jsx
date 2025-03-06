// function UserProps({name,age,email}){ ek way ye bhi hain without object
    function UserProps({user}){
    
    return(<>
        <h3>Using props name & age send </h3>
        {/* without object  */}
         {/* <h4>Props name : {name}</h4>
         <h4>Props age : {age}</h4>       
         <h4>Props email :{email} </h4> */}
          
            {/* using object   */}

            <h4>Props name : {user.name}</h4>
         <h4>Props age : {user.age}</h4>       
         <h4>Props email :{user.email} </h4>
         <hr />

         
    </>)
}
export default UserProps