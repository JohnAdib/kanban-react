import React, { useState } from "react";
import Input from "../atoms/Input";
import IconArchive from "../atoms/IconArchive";
import IconMove from "../atoms/IconMove";

function ClickToEdit(props) {
  const [isShowInput, setActive] = useState(false);
  const showEditInput = () => {
    // setActive(!isShowInput);
    setActive(true);
  };
  const hideEditInput = () => {
    setActive(false);
  };

  let divClass = "overflow-hidden text-ellipsis cursor-text px-2 grow";
  if (props.color) {
    divClass += " " + props.color;
  }
  let inputClass = "absolute inset-0 z-10";
  if (!isShowInput) {
    inputClass += " hidden";
  }

  const btnArchiverElement = (
    <div
      className="archiveBtn flex-none transition invisible group-hover:visible"
      onClick={() => {
        const listId = parseInt(props.listId);
        const cardId = parseInt(props.cardId);
        props.onClickArchive(listId, cardId);
      }}
    >
      <IconArchive className="cursor-pointer rounded transition hover:bg-black/10 p-1 h-6 w-6" />
    </div>
  );
  const btnArchive = props.onClickArchive ? btnArchiverElement : "";

  const btnMoveElement = (
    <div
      className="archiveBtn flex-none transition invisible group-hover:visible"
      onClick={props.onClickMove}
    >
      <IconMove className="cursor-pointer rounded transition hover:bg-black/10 p-1 h-6 w-6" />
    </div>
  );
  const btnMove = props.onClickMove ? btnMoveElement : "";

  return (
    <div className="group flex flex-row flex-nowrap relative flex-none items-center gap-1 rounded transition hover:bg-white/20 focus:bg-white/40">
      <div className={divClass} onClick={showEditInput}>
        {props.children}
      </div>
      {btnArchive}
      {btnMove}
      <Input
        type="text"
        value={props.value}
        placeholder={props.value}
        onChange={(e) => {
          let newVal = e.target.value.trimStart();
          if (!newVal) {
            newVal = " ";
          }
          const listId = parseInt(props.listId);
          const cardId = parseInt(props.cardId);
          props.onChange(newVal, listId, cardId);
        }}
        onBlur={hideEditInput}
        className={inputClass}
      />
    </div>
  );
}

export default ClickToEdit;
