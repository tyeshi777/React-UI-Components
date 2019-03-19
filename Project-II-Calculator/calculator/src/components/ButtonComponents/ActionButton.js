import React from "react";
import "./Button.css";

const ActionButton = props => {
  return <div className="action">{props.signData.map(sign => sign)}</div>;
};

export default ActionButton;
