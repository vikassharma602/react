import AdvUser from "./AdvUser"
import Wrapper from "./Wrapper"

function AdvProps(){
    return(<>
            <hr />
            <h2>Advance Props concept</h2>
            <AdvUser name ="Vikas Sharma " />
            <AdvUser name = "Aman sharma" />
            <hr />
            {/* pass jsx with props */}

            <Wrapper>
            <h3>Hello Everyone </h3>
            </Wrapper>

            <Wrapper color="orange" >
            <h3>Hello Anil  </h3>
            </Wrapper>
                    
                 {/* style pass with props    */}
            <Wrapper>
            <h3>Hello keshvi  </h3>
            </Wrapper>



    </>)

}
export default AdvProps