import React from "react";

function Select(props) {
  if (!props.options) {
    return;
  }

  const options = props.options.map((v) => (
    <option key={v.key} value={v.key}>
      {v.value}
    </option>
  ));

  return (
    <select
      id={props.id}
      className={props.className}
      onClick={props.onClick}
      onChange={props.onChange}
      value={props.selected}
    >
      {options}
    </select>
  );
}

export default Select;
