import React from 'react'

const State = () => {
    const fruit = "Apple "
    const handelFruit=()=>{
        fruit="Banana"
        console.log(fruit);
        
    }

  return (
    <div>
            <h3>{fruit}</h3>
            <button onChange={handelFruit}>change Fruit name </button>
    </div>
  )
}

export default State