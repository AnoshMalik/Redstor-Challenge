import { useState, useEffect } from "react";
import "./App.css";
import logo from "./redstorlogo.jpeg"

export default function App() {

   useEffect(() => {
     document.title = "REDSTOR Challenge";
   }, []);


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
    if (aDiscount[0] === 0 || aDiscount[1] === 0) {
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
    if (bDiscount[0] === 0 || bDiscount[1] === 0) {
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
    if (cDiscount[0] === 0 || cDiscount[1] === 0) {
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
    if (dDiscount[0] === 0 || dDiscount[1] === 0) {
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
      <div className="topContainer">
        <h1 className="">REDSTOR CHALLENGE</h1>
        <img src={logo} alt="LOGO" className="logo"></img>
      </div>
      <div className="container">
        <div className="">
          <img
            src="https://cosyowl.com/wp-content/uploads/2021/03/fragrance-red-apple-NAPL-2-100x100.jpg"
            alt="A"
          ></img>
          <p>A - £{aCost}</p>
          <h5>(3 for £150)</h5>
          <button onClick={incrementA} data-testid="incrementA">
            Add A
          </button>
        </div>
        <div className="">
          <img
            src="data:image/jpeg;base64,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"
            alt="B"
          ></img>
          <p>B - £{bCost}</p>
          <h5>(2 for £45) </h5>
          <button onClick={incrementB}>Add B</button>
        </div>
        <div className="">
          <img
            src="https://www.oasisoils.co.uk/wp-content/uploads/2019/06/sweet-black-cherry-1-100x100.jpg"
            alt="C"
          ></img>
          <p>C - £{cCost}</p>
          <h5>(2 for £45)</h5>

          <button onClick={incrementC}>Add C</button>
        </div>
        <div className="">
          <img
            src="data:image/jpeg;base64,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"
            alt="D"
          ></img>
          <p>D - £{dCost}</p>
          <h5>(2 for £45)</h5>

          <button onClick={incrementD}>Add D</button>
        </div>
      </div>
      <div className="container">
        <span>
          <h3 data-testid="counterA">CART</h3>
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

      <div className="container">
        <span>
          <button onClick={countTotal}>CHECKOUT</button>
          <h3>TOTAL = £{globalTotal} (after discounts)</h3>
        </span>
      </div>
    </div>
  );
}
// MANUALLY TESTED -- > ALL TESTS PASSED
// 1. A --> 60
// 2. A B --> 90
// 3. C D B A --> 145
// 4. A A --> 120
// 5. A A A --> 150
// 6. A A A A --> 210
// 7. A A A A A --> 270
// 8. A A A A A A --> 300
// 9. A A A B --> 180
// 10. A A A B B --> 195
// 11. A A A B B D --> 220
// 12. D A B A B A --> 220