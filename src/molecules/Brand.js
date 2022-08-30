import Logo from "./../atoms/Logo";
import H1 from "./../atoms/H1";

function Brand(props) {
  return (
    <a
      target='_blank'
      href={props.link}
      rel='noreferrer'
      className='flex flex-row flex-nowrap flex-none items-center gap-1 lg:gap-2 px-2 rounded transition hover:bg-white/20 focus:bg-white/40'
    >
      <Logo size='32' />
      <H1>{props.children}</H1>
    </a>
  );
}

export default Brand;
