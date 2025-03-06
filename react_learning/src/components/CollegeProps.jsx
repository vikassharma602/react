function College({names}){
    console.log(names)
    return(<>
        <h2>Props using Array</h2>
        <h4>{names[1]}</h4>
    </>)
    
}
export default College