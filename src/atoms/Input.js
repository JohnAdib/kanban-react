function Input(props) {
  let inputClass =
    "text-black outline-2 outline-blue-600 rounded px-2 " + props.className;

  return (
    <input
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      className={inputClass}
      maxLength='200'
      data-father={props.father}
      data-grandfather={props.grandfather}
      ref={(input) => input && input.focus()}
    />
  );
}

export default Input;
