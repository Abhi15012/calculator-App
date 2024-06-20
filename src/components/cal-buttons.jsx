import { useContext } from "react";
import ArrData from "../store/datastore";


function Calbut(){

  const Extractdata= useContext(ArrData)

  return <>
  <div className="cal-button">
  {/* <button id="calci-b">c</button>
  <button id="calci-b">1</button>
  <button id="calci-b">2</button>
  <button id="calci-b">3</button> */}

     {Extractdata.map(item=>( <button id="calci-b">{item} </button>)) } 
 
</div>
  </>
}
export default Calbut;