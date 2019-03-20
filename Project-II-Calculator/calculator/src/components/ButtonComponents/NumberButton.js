import React from "react";
import "./Button.css";

const NumberButton = props => {
  // console.log(props);
  return (
    <div>
      <button className="clear">{props.num[0]}</button>
      <br />
      <button className="numBtn">{props.num[1]}</button>
      <button className="numBtn">{props.num[2]}</button>
      <button className="numBtn">{props.num[3]}</button>
      <br />
      <button className="numBtn">{props.num[4]}</button>
      <button className="numBtn">{props.num[5]}</button>
      <button className="numBtn">{props.num[6]}</button>
      <br />
      <button className="numBtn">{props.num[7]}</button>
      <button className="numBtn">{props.num[8]}</button>
      <button className="numBtn">{props.num[9]}</button>
      <br />
      <button className="clear">{props.num[10]}</button>
    </div>
  );
};

export default NumberButton;
