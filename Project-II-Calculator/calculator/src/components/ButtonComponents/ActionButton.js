import React from "react";
import "./Button.css";

const ActionButton = props => {
  return (
    <div>
      <button className="sign">{props.sign[0]}</button>
      <button className="sign">{props.sign[1]}</button>
      <button className="sign">{props.sign[2]}</button>
      <button className="sign">{props.sign[3]}</button>
      <button className="sign">{props.sign[4]}</button>
    </div>
  );
};

export default ActionButton;
