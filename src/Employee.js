import React,{useState} from 'react';
import Address from './Address';
export default function Employee(){
    //useState()=>Used to change the state of a component
  let [id, setId]=useState(1001);
  let [name, setName]=useState("Deepak");
    // update details
    let updateEmployee=()=>{
      setId(2002);
      setName('virat');
    }
  return (
      <div id="c1">
        <h4>Employee component</h4>
        <p>
          
          {id},{name}
        </p>
        <button onClick={updateEmployee}>update data</button>
        {/* <Address/> */}
      </div>
  );
}