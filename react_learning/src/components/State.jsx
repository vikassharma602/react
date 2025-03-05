import React from 'react'
import{useState} from 'react'


const State=()=>{
//     let fruit="Apple "

//     const handelFruit=()=>{
//         fruit="Banana"
//         console.log(fruit);
        
    // }

    // fruit name change with state 
    const [fruit,setFruit]=useState("Apple")
    const handelFruit=()=>{
          setFruit("Banana")
    }

    // Counter 

    const [count,setCount]=useState(0);
    const handelCount=()=>{
      setCount(count+1);
    }
    const reverseCount=()=>{
      setCount(count-1);
    }



  return (
    <div>
              <h1> State in React </h1>
            {/* <h3>{fruit}</h3> */}
            {/* <button onClick={handelFruit}>change Fruit name </button> */}

            <h2>{fruit}</h2>

            <button onClick={handelFruit}>change State</button>
            <h1>Counter:{count}</h1>
            <button onClick={handelCount}>Update count</button>
            <button onClick={reverseCount} >Reverse count </button>
            <h2>------------------------------------------------</h2>
    </div>
  )
}

export default State