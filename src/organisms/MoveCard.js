import React, { useState } from "react";
import Selectbox from "../molecules/Selectbox";
import Button from "../atoms/Button";

function MoveCard(
  props,
  isModalMoveVisible,
  setModalMoveVisible,
  cardId,
  cardTitle,
  currentListId,
  currentListTitle,
  moveCardNewList,
  moveCardNewPosition,
  setMoveCardNewList,
  setMoveCardNewPosition,
  moveCardNewPositions
) {
  if (currentListId === undefined) {
    return;
  }

  function getListIndex(_listId) {
    return parseInt(props.data.findIndex((el) => el.id === parseInt(_listId)));
  }

  function getListPositionsById(_listId) {
    const visibleCards = props.data[getListIndex(moveCardNewList)].cards;
    const maxItem = visibleCards.length + 1;
    let newAvailPositions = [];
    let positionIndex = 0;
    for (let index = 0; index < maxItem; index++) {
      if (visibleCards[index] && visibleCards[index].archive === true) {
        continue;
      }
      let optionTxt = positionIndex;
      if (positionIndex === 0) {
        optionTxt = "0 (First item)";
      } else if (index === maxItem - 1) {
        optionTxt = positionIndex + " (Last item)";
      }
      newAvailPositions.push({ key: index, value: optionTxt });
      positionIndex++;
    }
    return newAvailPositions;
  }

  const myLists = props.data
    .filter((v) => v.archive !== true)
    .map(({ id, title }) => ({ key: id, value: title }));
  const myPositions = getListPositionsById(moveCardNewList);

  let modalClass =
    "fixed inset-0 backdrop-blur-sm bg-black/30 p-2 grid place-items-center h-screen";

  if (isModalMoveVisible) {
    modalClass += " z-10";
  } else {
    modalClass += " -z-10";
  }

  function saveNewList(e) {
    setMoveCardNewList(e.target.value);
  }

  function saveNewPosition(e) {
    setMoveCardNewPosition(e.target.value);
  }

  function submitMoveCard(e) {
    e.preventDefault();
    props.onMoveCard(cardId, currentListId, moveCardNewList, moveCardNewPosition);
    // close modal
    setModalMoveVisible(false);
  }

  return (
    <div
      id="modalMoveCard"
      className={modalClass}
      onClick={(e) => {
        if (e.target.id === "modalMoveCard") {
          // click outside of modal center
          setModalMoveVisible(false);
        }
      }}
    >
      <form
        className="relative max-w-screen-sm lg:w-96 bg-slate-100/90 rounded p-8 shadow-lg z-20 leading-7"
        onSubmit={submitMoveCard}
      >
        <div
          className="flex flex-none flex-nowrap gap-2 text-sm bg-black/10 p-2 mb-2 rounded"
          title="List"
        >
          <span className="grow font-bold truncate">{currentListTitle}</span>
          <span className="flex-none">{currentListId}</span>
        </div>
        <div
          className="flex flex-none flex-nowrap gap-2 text-sm bg-black/10 p-2 mb-2 rounded"
          title="Card"
        >
          <span className="grow font-bold truncate">{cardTitle}</span>
          <span className="flex-none">{cardId}</span>
        </div>

        <Selectbox
          id="selectList"
          title="New List"
          options={myLists}
          selected={moveCardNewList}
          onChange={saveNewList}
        />
        <Selectbox
          id="selectPosition"
          title="New Position"
          options={myPositions}
          selected={moveCardNewPosition}
          onChange={saveNewPosition}
        />

        <Button className="px-3 py-1 rounded leading-7 bg-blue-600 hover:bg-blue-800 text-white mt-2">
          Move
        </Button>
      </form>
    </div>
  );
}

export default MoveCard;
