import React from 'react'
import { useState } from 'react'



const MultipleConditions = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Multiple Conditions in react js  </h1>

            <h4>count: {count}</h4>
            <button onClick={()=>setCount(count+1)} >counter </button>
            {
                count==0?<h3>Condition 0</h3>
                :count==1?<h3>Condition 1</h3>
                :count==3?<h3>Condition 3</h3>

                :count==5?<h3>Condition 5</h3>
                :null
            }
            <h3>-----------------------------------------------</h3>
        </div>
    )
}

export default MultipleConditions