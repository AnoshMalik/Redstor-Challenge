import { useState } from "react";
import "./App.css";

export default function App() {
  const [aCounter, setACounter] = useState(0);
  const [aCost, setACost] = useState(60);
  const [bCounter, setBCounter] = useState(0);
  const [bCost, setBCost] = useState(30);
  const [cCounter, setCCounter] = useState(0);
  const [cCost, setCCost] = useState(30);
  const [dCounter, setDCounter] = useState(0);
  const [dCost, setDCost] = useState(25);

  const incrementA = () => {
    setACounter(aCounter + 1);
    console.log(`A's current value = ${aCounter}`);
  };
  const incrementB = () => {
    setBCounter(bCounter + 1);
    console.log(`A's current value = ${bCounter}`);
  };
  const incrementC = () => {
    setCCounter(cCounter + 1);
    console.log(`A's current value = ${cCounter}`);
  };
  const incrementD = () => {
    setDCounter(dCounter + 1);
    console.log(`A's current value = ${dCounter}`);
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
            <p>Cost {aCost}</p>
            <button onClick={incrementA}>Add A</button>
          </div>
          <div>
            <img src="" alt="B"></img>
            <p>Cost {bCost}</p>
            <button onClick={incrementB}>Add B</button>
          </div>
          <div>
            <img src="" alt="C"></img>
            <p>Cost {cCost}</p>
            <button onClick={incrementC}>Add C</button>
          </div>
          <div>
            <img src="" alt="D"></img>
            <p>Cost {dCost}</p>
            <button onClick={incrementD}>Add D</button>
          </div>
        </span>
      </div>
      <div>
        <span>
          <h3>CART</h3>
          <ol>
            <li>A x {aCounter}</li>
            <li>B x {bCounter}</li>
            <li>c x {cCounter}</li>
            <li>D x {dCounter}</li>
          </ol>
        </span>
      </div>
    </div>
  );
}
