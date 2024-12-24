import React from 'react';
export default function EventEx1(){
  let showMsg=()=>{
    alert('welcome to students');
  }
  return (
    <div>
      <button onClick={showMsg}>click me</button>
    </div>
  )
}