import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      style={{ background: props.isValid ? "red" : "#ff474c" }}
      className="button"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
