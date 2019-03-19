import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
// import Footer from "./components/FooterComponents/Footer";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  const numArr = ["clear", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const signArr = ["÷", "x", "-", "+", "="];

  return (
    <div id="root">
      <CalculatorDisplay />
      <NumberButton propData={numArr} className="numBtn" />
      {/* <Footer /> */}
      <ActionButton signData={signArr} />
    </div>
  );
};

export default App;
