import React,{useState} from 'react';
import './style.css';
import Employee from './Employee';
import Counter from './Counter';

export default function App() {
  return (<div>
    <h1>Root Component</h1>
        <Employee/>
        <Counter/>
  </div>
  );

}
