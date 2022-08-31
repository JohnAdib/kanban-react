import React from "react"

function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  );
}

export default Label;
