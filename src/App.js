
import { Dlt } from "./Dlt";
import { useState } from "react";
import './App.css';


function App() {

const [todolst,settlst]=useState([])
const [txt,settxt]=useState("")


function gettext(e){
  settxt(e.target.value);
}
function addlist(){
  const item={
    id: todolst.length ==0 ? 1 :todolst[todolst.length-1].id+1,
    taskname:txt,};
  var newlst=[...todolst,item];
  settlst(newlst);
}
const dlt=(id) =>{
  const newtodolst=todolst.filter((task)=>{
    if (task.id==id){
      return false
    }
    else{
      return true
    }
  })
  settlst(newtodolst);

}


  
  return (
    <div className="App"> 
    <h1> TO-DO LIST</h1>
    <div  >
     <input type="text" onChange={gettext} />
     <br></br>
     <br></br><button onClick={addlist}>Add list</button>

     </div>
     <div >
     {todolst.map((item,key)=> {

      return <Dlt taskname={item.taskname} id={item.id} dlt={dlt}/>
     }
     )};
     
     


      </div> 
      
     
     
    
   
   
    
    
    


    
    </div>
  )
  };


export default App;
