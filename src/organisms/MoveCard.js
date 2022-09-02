import React, { useState } from "react";
import Selectbox from "../molecules/Selectbox";
import Button from "../atoms/Button";

function MoveCard(props, isModalMoveVisible, setModalMoveVisible) {
  const myLists = [11, 22];
  const myPositions = [1, 2, 3];

  let modalClass =
    "fixed inset-0 backdrop-blur-sm bg-black/30 p-2 grid place-items-center h-screen";

  if (isModalMoveVisible) {
    modalClass += " z-10";
  } else {
    modalClass += " -z-10";
  }

  return (
    <div id="modalMoveCard" className={modalClass} onClick={setModalMoveVisible}>
      <div className="w-72 bg-slate-100/90 rounded p-4 shadow-lg z-20 leading-7">
        <Selectbox id="selectList" title="List" options={myLists} onChange={props.onChange} />
        <Selectbox
          id="selectPosition"
          title="Position"
          options={myPositions}
          onChange={props.onChange}
        />

        <Button className="px-3 py-1 rounded leading-7 bg-blue-600 hover:bg-blue-800 text-white mt-2">
          Move
        </Button>
      </div>
    </div>
  );
}

export default MoveCard;
