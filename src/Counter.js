import React,{useState} from 'react';
export default function Counter(){
   let [x,setX]=useState(0);
   let increment=()=>{
     setX(x+1)
   };
   let decrement=()=>setX(x-1);
   let reset=()=>setX(0);
  return(
    <div>
      <p>x={x}</p>
      <button onClick={increment}>INC</button>&nbsp;
      <button onClick={decrement}>DEC</button>&nbsp;
      <button onClick={reset}>RESET</button>
    </div>
  )
}