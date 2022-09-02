import React, { useState } from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

function BoardTemplate(props) {
  const [boardData, setBoardData] = useState(props.data);
  const [inputAddNewList, setNewList] = useState("");
  const [inputAddNewCard, setNewCard] = useState("");

  updatePageTitle();

  function handleBoardTitleChange(newTitle) {
    const myData = { ...boardData };
    myData.title = newTitle;
    // save data
    setBoardData(myData);
    props.onBoardDataChange(myData);

    updatePageTitle(newTitle);
  }

  function updatePageTitle(newTitle) {
    // if newTitle passed, use it because of state delay updating
    const myTitle = newTitle || boardData.title;
    // update page title
    document.title = myTitle + " | " + boardData.brand;
  }

  function handleChangeInputAddNewList(event) {
    setNewList(event.target.value);
  }

  function handleSubmitNewList(event) {
    event.preventDefault();
    const myData = { ...boardData };
    const newTitle = inputAddNewList;
    if (!newTitle) {
      return;
    }
    const newListArr = {
      id: myData.lists.length + 1,
      title: newTitle,
      cards: []
    };
    myData.lists.push(newListArr);
    setBoardData(myData);
    setNewList("");
    props.onBoardDataChange(myData);
  }

  function handleChangeListTitle(newTitle, listId) {
    const myData = { ...boardData };
    const listIndex = myData.lists.findIndex((el) => el.id === listId);
    // change title
    myData.lists[listIndex].title = newTitle;

    setBoardData(myData);
    props.onBoardDataChange(myData);
  }

  function handleArchiveList(event) {
    const myData = { ...boardData };
    const listId = parseInt(event.target.closest("div").dataset.father);
    const listIndex = myData.lists.findIndex((el) => el.id === listId);

    // delete list
    myData.lists.splice(listIndex, 1);

    setBoardData(myData);
    props.onBoardDataChange(myData);
  }

  function handleChangeInputAddNewCard(event) {
    setNewCard(event.target.value);
  }

  function handleSubmitNewCard(event) {
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
    // clean input after add
    setBoardData(myData);
    setNewCard("");
    // save data inside storage
    props.onBoardDataChange(myData);
  }

  function handleChangeCard(newVal, cardId, listId) {
    const myData = { ...boardData };
    const listIndex = parseInt(myData.lists.findIndex((el) => el.id === listId));
    const cardIndex = myData.lists[listIndex].cards.findIndex((el) => el.id === cardId);
    const newCardArr = validateCardTitle(myData, newVal, cardId);

    myData.lists[listIndex].cards[cardIndex] = newCardArr;

    setBoardData(myData);
    props.onBoardDataChange(myData);
  }

  function handleArchiveCard(event) {
    const myData = { ...boardData };
    const listId = parseInt(event.target.closest("div").dataset.grandfather);
    const cardId = parseInt(event.target.closest("div").dataset.father);

    const listIndex = parseInt(myData.lists.findIndex((el) => el.id === listId));
    const cardIndex = myData.lists[listIndex].cards.findIndex((el) => el.id === cardId);

    myData.lists[listIndex].cards.splice(cardIndex, 1);

    setBoardData(myData);
    props.onBoardDataChange(myData);
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
        onSubmitNewList={handleSubmitNewList}
        inputAddNewList={inputAddNewList}
        onChangeInputAddNewList={handleChangeInputAddNewList}
        onSubmitNewCard={handleSubmitNewCard}
        inputAddNewCard={inputAddNewCard}
        onChangeInputAddNewCard={handleChangeInputAddNewCard}
        onChangeListTitle={handleChangeListTitle}
        onChangeCard={handleChangeCard}
        onArchiveList={handleArchiveList}
        onArchiveCard={handleArchiveCard}
      />
    </div>
  );
}

export default BoardTemplate;
