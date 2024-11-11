import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// here hooks are important
//hooks are responsible for changes
//default any value you give at usestate
// usestate take two thing one variable and 2nd method [counter, setcounter]= useState(12)
// react change ui by itself virtual DOM one thing at multiple place

function App() {
  // let counter = 0;

 let [steper, setSteper] = useState(12)

 let [counter, setCounter] = useState(12)


  const incrementSteper = () => {
    console.log("add wala chal raha hai");
    steper = steper + 1;
    setSteper(steper)
  };
  const decrementSteper = () => {
    console.log("add wala chal raha hai");
    steper = steper - 1;
    setSteper(steper)
  };
  const incrementCounter = () => {
    console.log("add wala chal raha hai");
    counter = counter + steper;
    setCounter(counter)
  };
  const deccrementCounter = () => {
    console.log("add wala chal raha hai");
    counter = counter - steper;
    setCounter(counter)
  };

  return (
    <div className="counter">
      <h1>Counter React App</h1>
      <h2>Counter value : </h2>
      <div className="step">
        <button onClick={decrementSteper}>-</button>
        <h2>Step value is : {steper}</h2>
        <button onClick={incrementSteper}>+</button>
      </div>
      <div className="count">
        <button onClick={deccrementCounter}>-</button>
        <h2>Step value is : {counter}</h2>
        <button onClick={incrementCounter}>+</button>
      </div>
      <div>4 day and the date is 23 04 2024</div>
    </div>
  );
}

export default App;
