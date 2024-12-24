import React from 'react';
export default function Location(){
  //state: data inside the variables
  let lat=12.34;
  let long=13.12;
  //useState()=>Used to change the state
  return (
      <div id="c3">
        <h6>Location component</h6>
        <p>
        
          {lat},{long}
        </p>
      </div>
  );
}