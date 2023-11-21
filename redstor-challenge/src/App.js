import { useState, useEffect } from "react";
import "./App.css";
import logo from "./redstorlogo.jpeg";
import apple from "./apple.jpg";
import banana from "./banana.jpeg"
import cherry from "./cherry.jpg";
import dragonfruit from "./dragonfruit.jpeg";


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
    // console.log(`A's current value = ${aCounter}`);
  };
  const incrementB = () => {
    setBCounter(bCounter + 1);
    // console.log(`B's current value = ${bCounter}`);
  };
  const incrementC = () => {
    setCCounter(cCounter + 1);
    // console.log(`C's current value = ${cCounter}`);
  };
  const incrementD = () => {
    setDCounter(dCounter + 1);
    // console.log(`D's current value = ${dCounter}`);
  };

  const countTotal = () => {
    let aTotal = countATotal;
    let bTotal = countBTotal;
    let cTotal = countCTotal;
    let dTotal = countDTotal;

    let localTotal =
      countATotal() + countBTotal() + countCTotal() + countDTotal();
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
          <img src={apple} alt="A"></img>
          <p>A - £{aCost}</p>
          <h5>(3 for £150)</h5>
          <button onClick={incrementA} data-testid="incrementA">
            Add A
          </button>
        </div>
        <div className="">
          <img src={banana} alt="B"></img>
          <p>B - £{bCost}</p>
          <h5>(2 for £45) </h5>
          <button onClick={incrementB} data-testid="incrementB">
            Add B
          </button>
        </div>
        <div className="">
          <img src={cherry} alt="C"></img>
          <p>C - £{cCost}</p>
          <h5>-</h5>

          <button onClick={incrementC} data-testid="incrementC">
            Add C
          </button>
        </div>
        <div className="">
          <img src={dragonfruit} alt="D"></img>
          <p>D - £{dCost}</p>
          <h5> - </h5>

          <button onClick={incrementD} data-testid="incrementD">
            Add D
          </button>
        </div>
      </div>
      <div className="container">
        <span>
          <h3>CART</h3>
          <ol>
            <li data-testid="counterA">
              A x {aCounter} @ £{aCost} each
            </li>
            <li data-testid="counterB">
              B x {bCounter} @ £{bCost} each
            </li>
            <li data-testid="counterC">
              C x {cCounter} @ £{cCost} each
            </li>
            <li data-testid="counterD">
              D x {dCounter} @ £{dCost} each
            </li>
          </ol>
        </span>
      </div>

      <div className="container">
        <span>
          <button onClick={countTotal} data-testid="checkoutButton">
            CHECKOUT
          </button>
          <h3 data-testid="checkoutTotal">
            TOTAL = £{globalTotal} (after discounts)
          </h3>
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
