import React, { useState, useEffect } from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

function BoardTemplate(props) {
  const [boardData, setBoardData] = useState(props.data);
  const [inputNewList, setNewList] = useState("");
  const [inputAddNewCard, setNewCard] = useState("");
  // on start update page title
  useEffect(() => {
    document.title = boardData.title + " | " + boardData.brand;
  });

  function handleSaveAndUpdateData(data) {
    setBoardData(data);
    props.onBoardDataChange(data);
  }

  function getNewCardId() {
    return parseInt(boardData.lists.map((x) => x.cards.length).reduce((a, b) => a + b)) + 1;
  }

  function getNewListId() {
    return parseInt(boardData.lists.length) + 1;
  }

  function getListIndexById(listId) {
    return parseInt(boardData.lists.findIndex((el) => el.id === listId));
  }

  function getCardIndexById(listIndex, cardId) {
    return parseInt(boardData.lists[listIndex].cards.findIndex((el) => el.id === cardId));
  }

  function handleBoardTitleChange(newTitle) {
    const myData = { ...boardData };
    myData.title = newTitle;
    handleSaveAndUpdateData(myData);
  }

  function handleSubmitInputNewList() {
    if (!inputNewList) {
      throw "List title is empty";
    }
    const myData = { ...boardData };
    const newListArr = {
      id: getNewListId(),
      title: inputNewList,
      cards: []
    };
    myData.lists.push(newListArr);
    setNewList("");
    handleSaveAndUpdateData(myData);
  }

  function handleChangeListTitle(newTitle, listId) {
    const myData = { ...boardData };
    myData.lists[getListIndexById(listId)].title = newTitle;
    handleSaveAndUpdateData(myData);
  }

  function handleArchiveList(listId) {
    const myData = { ...boardData };
    // delete list
    // myData.lists.splice(getListIndexById(listId), 1);
    // archive list
    myData.lists[getListIndexById(listId)].archive = true;
    handleSaveAndUpdateData(myData);
  }

  function handleSubmitInputAddNewCard(listId) {
    const myData = { ...boardData };
    const newCardObj = createNewCardObject(inputAddNewCard);
    myData.lists[getListIndexById(listId)].cards.push(newCardObj);
    setNewCard("");
    handleSaveAndUpdateData(myData);
  }

  function handleChangeCardTitle(newVal, listId, cardId) {
    const myData = { ...boardData };
    const listIndex = getListIndexById(listId);
    const cardIndex = getCardIndexById(listIndex, cardId);
    const newCardObj = createNewCardObject(newVal, cardId);
    myData.lists[listIndex].cards[cardIndex] = newCardObj;
    handleSaveAndUpdateData(myData);
  }

  function handleArchiveCard(listId, cardId) {
    const myData = { ...boardData };
    const listIndex = getListIndexById(listId);
    const cardIndex = getCardIndexById(listIndex, cardId);
    // delete card
    // myData.lists[listIndex].cards.splice(cardIndex, 1);
    // archive list
    myData.lists[listIndex].cards[cardIndex].archive = true;
    handleSaveAndUpdateData(myData);
  }

  function handleMoveCard(cardId, oldListId, newListId, newPositionIndex) {
    const myData = { ...boardData };
    const oldListIndex = getListIndexById(parseInt(oldListId));
    const newListIndex = getListIndexById(parseInt(newListId));
    const oldCardIndex = getCardIndexById(oldListIndex, cardId);
    const myCard = myData.lists[oldListIndex].cards.splice(oldCardIndex, 1)[0];
    myData.lists[newListIndex].cards.splice(newPositionIndex, 0, myCard);
    handleSaveAndUpdateData(myData);
  }

  function createNewCardObject(cardVal, cardId) {
    if (!cardVal) {
      throw "Card title is empty";
    }
    let cardTitle = cardVal;
    // get index of list
    const myCardId = cardId || getNewCardId();
    // extract hashtags
    const tags = cardTitle
      .split(" ")
      .filter((v) => v.startsWith("#"))
      .map((v) => v.replace("#", ""));
    // remove all tags from title
    tags.forEach((x) => {
      cardTitle = cardTitle.replace("#" + x, "");
    });
    const Obj = {
      id: myCardId,
      title: cardTitle.trim(),
      value: cardVal,
      tag: tags
    };
    return Obj;
  }

  const pageStyle =
    "h-screen overflow-hidden select-none flex flex-col bg-[" + boardData.background + "]";
  // bg-[#0079bf] bg-[#00aecc]

  return (
    <div className={pageStyle}>
      <BoardHeader data={boardData} onChangeBoardTitle={handleBoardTitleChange} />
      <BoardLists
        data={boardData.lists}
        // list - add new
        inputNewList={inputNewList}
        onChangeInputNewList={setNewList}
        onSubmitInputNewList={handleSubmitInputNewList}
        // list - change title
        onChangeListTitle={handleChangeListTitle}
        // list - archive
        onArchiveList={handleArchiveList}
        // card - new new
        inputAddNewCard={inputAddNewCard}
        onChangeInputAddNewCard={setNewCard}
        onSubmitInputAddNewCard={handleSubmitInputAddNewCard}
        // card - change
        onChangeCardTitle={handleChangeCardTitle}
        // card - archive
        onArchiveCard={handleArchiveCard}
        // card - move
        onMoveCard={handleMoveCard}
      />
    </div>
  );
}

export default BoardTemplate;
