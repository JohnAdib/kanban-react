import React from "react"
import Avatar from "../molecules/Avatar";
import ClickToEdit from "../molecules/ClickToEdit";
import Brand from "../molecules/Brand";

function BoardHeader(props) {
  const { data } = props;

  const headerClass =
    "flex flex-row flex-nowrap justify-center flex-none gap-2 lg:gap-4 py-1.5 px-1 leading-8 backdrop-blur-md bg-black/20 text-white";

  return (
    <header className={headerClass}>
      <Brand link={data.brandLink}>{data.brand}</Brand>
      <h1>
        <ClickToEdit value={data.title} onChange={props.onChangeBoardTitle}>
          {data.title}
        </ClickToEdit>
      </h1>
      <div className='grow'></div>
      <Avatar src={data.userAvatar} alt={data.userName}></Avatar>
    </header>
  );
}

export default BoardHeader;
