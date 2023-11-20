import { useState } from "react";
import "./App.css";

export default function App() {
  const [aCounter, setACounter] = useState(0);
  const [aCost, setACost] = useState(60);
  const [bCounter, setBCounter] = useState(0);
  const [bCost, setBCost] = useState(30);
  const [cCounter, setCCounter] = useState(0);
  const [cCost, setCCost] = useState(30);
  const [dCounter, setdCounter] = useState(0);
  const [dCost, setDCost] = useState(25);

  const incrementA = () => {
    setACounter(aCounter + 1);
    console.log(`A's current value = ${aCounter}`);
  };
  const incrementB = () => {
    setACounter(aCounter + 1);
    console.log(`A's current value = ${aCounter}`);
  };
  const incrementC = () => {
    setACounter(aCounter + 1);
    console.log(`A's current value = ${aCounter}`);
  };
  const incrementD = () => {
    setACounter(aCounter + 1);
    console.log(`A's current value = ${aCounter}`);
  };

  return (
    <div>
      <div>
        <h1>REDSTOR CHALLENGE</h1>
      </div>
      <div>
        <span>
          <div>
            <img src="" alt="A"></img>
            <p>Cost</p>
            <button onClick={incrementA}>Add A</button>
          </div>
          <div>
            <img src="" alt="B"></img>
            <p>Cost</p>
            <button onClick={incrementB}>Add B</button>
          </div>
          <div>
            <img src="" alt="C"></img>
            <p>Cost</p>
            <button onClick={incrementC}>Add C</button>
          </div>
          <div>
            <img src="" alt="D"></img>
            <p>Cost</p>
            <button onClick={incrementD}>Add D</button>
          </div>
        </span>
      </div>
      <div>
        <span>
          <h3>CART</h3>
        </span>
      </div>
    </div>
  );
}
