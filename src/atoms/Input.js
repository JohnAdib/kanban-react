import React from "react";

function Input(props) {
  const inputClass = "text-black outline-2 outline-blue-600 rounded px-2 " + props.className;

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      e.target.blur();
    }
  }

  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyDown={handleKeyDown}
      onBlur={props.onBlur}
      className={inputClass}
      maxLength="200"
      ref={(input) => input && input.focus()}
    />
  );
}

export default Input;
