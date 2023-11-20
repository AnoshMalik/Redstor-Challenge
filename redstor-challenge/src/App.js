import { useState } from 'react';
import './App.css';



export default function App() {

const [aCounter, setACounter] = useState(0);

const incrementA = () => {
  setACounter(aCounter + 1);
  console.log(`A's current value = ${aCounter}`);
};
  
  return (
    <div>
        <img src="" alt='A'></img>
      <p>Cost</p>
      <button onClick={incrementA}>Add A</button>
    </div>
  );
};




