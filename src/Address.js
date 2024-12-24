import React from 'react';
import Location from './Location'
export default function Address(){
  //state: data inside the variables
  let hno="201";
  let city="hyd";
  //useState()=>Used to change the state
  return (
      <div id="c2">
        <h5>Address component</h5>
        <p>
          
          {hno},{city}
        </p>
        <Location/>
      </div>
  )
}