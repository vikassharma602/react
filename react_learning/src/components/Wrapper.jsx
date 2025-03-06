// color ="green " ye default color dene ki style hain 
function Wrapper({children,color}){
    return(<>
                <h2>Pass jsx with props</h2>
            <div style={{color:color,border:"3px solid green",borderRadius:"20px",width:'300px'}} >
                {children}

            </div>


    </>)

}
export default Wrapper