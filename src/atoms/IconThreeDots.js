function IconThreeDots(props) {
  // https://icons.getbootstrap.com/icons/three-dots/
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={props.size}
      height={props.size}
      fill='currentColor'
      className={props.className}
      viewBox='0 0 16 16'
    >
      <path d='M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z' />
    </svg>
  );
}

export default IconThreeDots;
