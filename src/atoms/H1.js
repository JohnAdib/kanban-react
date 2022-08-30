function H1(props) {
  return (
    <h1 className={props.className} onClick={props.onClick}>
      {props.children}
    </h1>
  );
}

export default H1;
