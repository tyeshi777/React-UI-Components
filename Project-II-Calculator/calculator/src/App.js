import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  const numArr = ["clear", 7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const signArr = ["÷", "x", "-", "+", "="];

  return (
    <div id="root">
      <CalculatorDisplay />
      <div className="flex">
        <section className="num">
          <NumberButton num={numArr} />
        </section>
        <section className="sign">
          <ActionButton sign={signArr} />
        </section>
      </div>
    </div>
  );
};

export default App;
