import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <div>
      <p>{props.propData.map(num => num)}</p>
    </div>
  );
};

export default NumberButton;
