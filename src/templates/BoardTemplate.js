import React, { useState } from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

function BoardTemplate(props) {
  const [boardData, setBoardData] = useState(props.data);
  const [inputNewList, setNewList] = useState("");
  const [inputAddNewCard, setNewCard] = useState("");
  // on start update page title
  updatePageTitle();

  function handleSaveAndUpdateData(data) {
    setBoardData(data);
    props.onBoardDataChange(data);
  }

  function updatePageTitle(newTitle) {
    // if newTitle passed, use it because of state delay updating
    const myTitle = newTitle || boardData.title;
    // update page title
    document.title = myTitle + " | " + boardData.brand;
  }

  function handleBoardTitleChange(newTitle) {
    const myData = { ...boardData };
    myData.title = newTitle;
    updatePageTitle(newTitle);
    handleSaveAndUpdateData(myData);
  }

  function handleChangeInputNewList(event) {
    setNewList(event.target.value);
  }

  function handleSubmitInputNewList(event) {
    event.preventDefault();
    const myData = { ...boardData };
    const newTitle = inputNewList;
    if (!newTitle) {
      return;
    }
    const newListArr = {
      id: myData.lists.length + 1,
      title: newTitle,
      cards: []
    };
    myData.lists.push(newListArr);
    setNewList("");
    handleSaveAndUpdateData(myData);
  }

  function handleChangeListTitle(newTitle, listId) {
    const myData = { ...boardData };
    const listIndex = myData.lists.findIndex((el) => el.id === listId);
    // change title
    myData.lists[listIndex].title = newTitle;
    handleSaveAndUpdateData(myData);
  }

  function handleArchiveList(event) {
    const myData = { ...boardData };
    const listId = parseInt(event.target.closest("div").dataset.father);
    const listIndex = myData.lists.findIndex((el) => el.id === listId);

    // delete list
    myData.lists.splice(listIndex, 1);
    handleSaveAndUpdateData(myData);
  }

  function handleChangeInputAddNewCard(event) {
    setNewCard(event.target.value);
  }

  function handleSubmitInputAddNewCard(event) {
    event.preventDefault();
    // read parent id to add card
    const listId = parseInt(event.target.dataset.list);
    const myData = { ...boardData };
    const listIndex = myData.lists.findIndex((el) => el.id === listId);
    const newCardArr = validateCardTitle(myData, inputAddNewCard);
    if (!newCardArr) {
      return;
    }

    myData.lists[listIndex].cards.push(newCardArr);
    setNewCard("");
    handleSaveAndUpdateData(myData);
  }

  function handleChangeCardTitle(newVal, cardId, listId) {
    const myData = { ...boardData };
    const listIndex = parseInt(myData.lists.findIndex((el) => el.id === listId));
    const cardIndex = myData.lists[listIndex].cards.findIndex((el) => el.id === cardId);
    const newCardArr = validateCardTitle(myData, newVal, cardId);

    myData.lists[listIndex].cards[cardIndex] = newCardArr;

    handleSaveAndUpdateData(myData);
  }

  function handleArchiveCard(event) {
    const myData = { ...boardData };
    const listId = parseInt(event.target.closest("div").dataset.grandfather);
    const cardId = parseInt(event.target.closest("div").dataset.father);

    const listIndex = parseInt(myData.lists.findIndex((el) => el.id === listId));
    const cardIndex = myData.lists[listIndex].cards.findIndex((el) => el.id === cardId);

    myData.lists[listIndex].cards.splice(cardIndex, 1);
    handleSaveAndUpdateData(myData);
  }

  function validateCardTitle(data, cardVal, cardId) {
    if (!cardVal) {
      return;
    }
    let cardTitle = cardVal;
    // get index of list
    const myCardId =
      cardId || parseInt(data.lists.map((x) => x.cards.length).reduce((a, b) => a + b)) + 1;

    // extract hashtags
    const tags = cardTitle
      .split(" ")
      .filter((v) => v.startsWith("#"))
      .map((v) => v.replace("#", ""));
    // remove all tags from title
    tags.forEach((x) => {
      cardTitle = cardTitle.replace("#" + x, "");
    });

    const newCardArr = {
      id: myCardId,
      title: cardTitle.trim(),
      value: cardVal,
      tag: tags
    };

    return newCardArr;
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
        onChangeInputNewList={handleChangeInputNewList}
        onSubmitInputNewList={handleSubmitInputNewList}
        // list - change title
        onChangeListTitle={handleChangeListTitle}
        // list - archive
        onArchiveList={handleArchiveList}
        // card - new new
        inputAddNewCard={inputAddNewCard}
        onChangeInputAddNewCard={handleChangeInputAddNewCard}
        onSubmitInputAddNewCard={handleSubmitInputAddNewCard}
        // card - change
        onChangeCardTitle={handleChangeCardTitle}
        // card - archive
        onArchiveCard={handleArchiveCard}
        // card - move
        // onMoveCard={handleMoveCard}
      />
    </div>
  );
}

export default BoardTemplate;
