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
  const [globalTotal, setGlobalTotal] = useState(0);
  // DISCOUNTS
  const [aDiscount, setADiscount] = useState([3, 150]);
  const [bDiscount, setBDiscount] = useState([2, 45]);
  const [cDiscount, setCDiscount] = useState([0, 0]);
  const [dDiscount, setDDiscount] = useState([0, 0]);

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

  const countTotal = () => {
    let aTotal = countATotal;
    let bTotal = countBTotal;
    let cTotal = countCTotal;
    let dTotal = countDTotal;

    let localTotal = countATotal() + countBTotal() + countCTotal() + countDTotal();
    setGlobalTotal(localTotal);
    return globalTotal;
  };

  const countATotal = () => {
    let total = 0;
    if (aDiscount[0] == 0 || aDiscount[1] == 0) {
      total = aCounter * aCost;
    } else {
      if (aCounter === aDiscount[0]) {
        total = aDiscount[1];
      } else if (aCounter > aDiscount[0]) {
        let whole = Math.floor(aCounter / aDiscount[0]);
        let remainder = aCounter % aDiscount[0];
        total = whole * aDiscount[1] + remainder * aCost;
      } else {
        total = aCounter * aCost;
      }
    }
    return total;
  };

  const countBTotal = () => {
    let total = 0;
    if (bDiscount[0] == 0 || bDiscount[1] == 0) {
      total = bCounter * bCost;
    } else {
      if (bCounter === bDiscount[0]) {
        total = bDiscount[1];
      } else if (bCounter > bDiscount[0]) {
        let whole = Math.floor(bCounter / bDiscount[0]);
        let remainder = bCounter % bDiscount[0];
        total = whole * bDiscount[1] + remainder * bCost;
      } else {
        total = bCounter * bCost;
      }
    }
    return total;
  };
  const countCTotal = () => {
    let total = 0;
    if (cDiscount[0] == 0 || cDiscount[1] == 0) {
      total = cCounter * cCost;
    } else {
      if (cCounter === cDiscount[0]) {
        total = cDiscount[1];
      } else if (cCounter > cDiscount[0]) {
        let whole = Math.floor(cCounter / cDiscount[0]);
        let remainder = cCounter % cDiscount[0];
        total = whole * cDiscount[1] + remainder * cCost;
      } else {
        total = cCounter * cCost;
      }
    }
    return total;
  };
  const countDTotal = () => {
    let total = 0;
    if (dDiscount[0] == 0 || dDiscount[1] == 0) {
      total = dCounter * dCost;
    } else {
      if (dCounter === dDiscount[0]) {
        total = dDiscount[1];
      } else if (dCounter > dDiscount[0]) {
        let whole = Math.floor(dCounter / dDiscount[0]);
        let remainder = dCounter % dDiscount[0];
        total = whole * dDiscount[1] + remainder * dCost;
      } else {
        total = dCounter * dCost;
      }
    }
    return total;
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
            <li>
              A x {aCounter} @ £{aCost} each
            </li>
            <li>
              B x {bCounter} @ £{bCost} each
            </li>
            <li>
              C x {cCounter} @ £{cCost} each
            </li>
            <li>
              D x {dCounter} @ £{dCost} each
            </li>
          </ol>
        </span>
      </div>

      <div>
        <span>
          <button onClick={countTotal}>CHECKOUT</button>
          <h3>TOTAL = £{globalTotal} (after discounts)</h3>
        </span>
      </div>
    </div>
  );
}
