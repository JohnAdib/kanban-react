function Img(props) {
  return (
    <img
      className={props.className}
      onClick={props.onClick}
      src={props.src}
      alt={props.alt}
    />
  );
}

export default Img;
