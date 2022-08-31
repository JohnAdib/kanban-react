import React from "react"

function Select(props) {
  if (!props.options) {
    return;
  }

  const options = props.options.map((x) => (
    <option key={x} value={x}>
      {x}
    </option>
  ));

  return (
    <select
      id={props.id}
      className={props.className}
      onClick={props.onClick}
      onChange={props.onChange}
    >
      {options}
    </select>
  );
}

export default Select;
