import Img from "./../atoms/Img";

function Avatar(props) {
  return (
    <button href='#' className='block rounded-full'>
      <Img
        className='block h-8 w-8 rounded-full transition hover:opacity-90 active:opacity-80 overflow-hidden'
        src={props.src}
        alt={props.alt}
      />
    </button>
  );
}

export default Avatar;
