import { useState } from "react";
import './Dlt.css';

export const Dlt=(props) =>{
  const[newcolour,setcolour]=useState('white')
  const comp=() =>{
  
  
    if (newcolour=='white'){
      setcolour("green");
    }
   
  };
 
return( <div className="box1">
  <br></br>
<li style={{color:"black",backgroundColor:newcolour} } >{props.taskname}</li>
<button onClick={()=>props.dlt(props.id)}  className="btn1">X</button>
<button onClick={comp} className="btn2">Complete</button>
</div>
)
};