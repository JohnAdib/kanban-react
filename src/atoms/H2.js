function H2(props) {
  return (
    <h2 className={props.className} onClick={props.onClick}>
      {props.children}
    </h2>
  );
}

export default H2;
