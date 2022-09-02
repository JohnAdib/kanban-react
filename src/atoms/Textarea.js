import React from "react";

function Textarea(props) {
  const textareaClass =
    "resize-none text-black outline-2 outline-blue-600 rounded px-2 " + props.className;

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      e.target.blur();
    }
  }

  return (
    <textarea
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyDown={handleKeyDown}
      onBlur={props.onBlur}
      className={textareaClass}
      maxLength="500"
      ref={(input) => input && input.focus()}
    />
  );
}

export default Textarea;
