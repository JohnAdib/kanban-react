import React from "react";
import BoardHeader from "./../organisms/BoardHeader";
import BoardLists from "./../organisms/BoardLists";

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: this.props.data,
      inputAddNewList: "",
      inputAddNewCard: ""
    };

    this.handleBoardTitleChange      = this.handleBoardTitleChange.bind(this);
    this.handleChangeInputAddNewList = this.handleChangeInputAddNewList.bind(this);
    this.handleSubmitNewList         = this.handleSubmitNewList.bind(this);
    this.handleChangeListTitle       = this.handleChangeListTitle.bind(this);
    this.handleArchiveList           = this.handleArchiveList.bind(this);

    this.handleChangeInputAddNewCard = this.handleChangeInputAddNewCard.bind(this);
    this.handleSubmitNewCard         = this.handleSubmitNewCard.bind(this);
    this.handleChangeCard            = this.handleChangeCard.bind(this);
    this.handleArchiveCard           = this.handleArchiveCard.bind(this);

    this.updatePageTitle();
  }

  handleBoardTitleChange(event) {
    const myData = { ...this.state.boardData };
    let newTitle = event.target.value;
    if (!newTitle) {
      newTitle = "";
    }
    myData.title = newTitle;
    this.setState({ boardData: myData });
    this.props.onBoardDataChange(myData);

    this.updatePageTitle(newTitle);
  }

  updatePageTitle(newTitle) {
    // if newTitle passed, use it because of state delay updating
    const myTitle = newTitle || this.state.boardData.title;
    // update page title
    document.title = myTitle + " | " + this.state.boardData.brand;
  }

  handleChangeInputAddNewList(event) {
    this.setState({ inputAddNewList: event.target.value });
  }

  handleSubmitNewList(event) {
    event.preventDefault();
    const myData = { ...this.state.boardData };
    const newTitle = this.state.inputAddNewList;
    if (!newTitle) {
      return;
    }
    const newListArr = {
      id: myData.lists.length + 1,
      title: newTitle,
      cards: []
    };
    myData.lists.push(newListArr);
    this.setState({ boardData: myData, inputAddNewList: "" });
    this.props.onBoardDataChange(myData);
  }

  handleChangeListTitle(event) {
    const myData = { ...this.state.boardData };
    let newTitle = event.target.value;
    if (!newTitle) {
      newTitle = "List Title";
    }
    const listId = parseInt(event.target.dataset.father);
    const listIndex = myData.lists.findIndex((el) => el.id === listId);
    // change title
    myData.lists[listIndex].title = newTitle;

    this.setState({ boardData: myData });
    this.props.onBoardDataChange(myData);
  }

  handleArchiveList(event) {
    const myData = { ...this.state.boardData };
    const listId = parseInt(event.target.closest("div").dataset.father);
    const listIndex = myData.lists.findIndex((el) => el.id === listId);

    // delete list
    myData.lists.splice(listIndex, 1);

    this.setState({ boardData: myData });
    this.props.onBoardDataChange(myData);
  }


  handleChangeInputAddNewCard(event) {
    this.setState({ inputAddNewCard: event.target.value });
  }

  handleSubmitNewCard(event) {
    event.preventDefault();
    // read parent id to add card
    const listId = parseInt(event.target.dataset.list);
    const myData = { ...this.state.boardData };
    const listIndex = myData.lists.findIndex((el) => el.id === listId);
    const newCardArr = this.validateCardTitle(
      myData,
      this.state.inputAddNewCard
    );

    myData.lists[listIndex].cards.push(newCardArr);
    // clean input after add
    this.setState({ boardData: myData, inputAddNewCard: "" });
    // save data inside storage
    this.props.onBoardDataChange(myData);
  }

  handleChangeCard(event) {
    const myData = { ...this.state.boardData };
    let newVal = event.target.value;
    if (!newVal) {
      newVal = "Board Title";
    }
    const listId = parseInt(event.target.dataset.grandfather);
    const cardId = parseInt(event.target.dataset.father);

    const listIndex = parseInt(
      myData.lists.findIndex((el) => el.id === listId)
    );
    const cardIndex = myData.lists[listIndex].cards.findIndex(
      (el) => el.id === cardId
    );

    const newCardArr = this.validateCardTitle(myData, newVal, cardId);

    myData.lists[listIndex].cards[cardIndex] = newCardArr;

    this.setState({ boardData: myData });
    this.props.onBoardDataChange(myData);
  }

  handleArchiveCard(event) {
    const myData = { ...this.state.boardData };
    const listId = parseInt(event.target.closest("div").dataset.grandfather);
    const cardId = parseInt(event.target.closest("div").dataset.father);

    const listIndex = parseInt(
      myData.lists.findIndex((el) => el.id === listId)
    );
    const cardIndex = myData.lists[listIndex].cards.findIndex(
      (el) => el.id === cardId
    );

    myData.lists[listIndex].cards.splice(cardIndex, 1);

    this.setState({ boardData: myData });
    this.props.onBoardDataChange(myData);
  }

  validateCardTitle(data, cardVal, cardId) {
    if (!cardVal) {
      return;
    }
    let cardTitle = cardVal;
    // get index of list
    const myCardId = cardId || parseInt( data.lists.map((x) => x.cards.length).reduce((a, b) => a + b)) + 1;

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


  render() {
    const pageStyle =
      "h-screen overflow-hidden select-none flex flex-col bg-[#0079bf]";
    // bg-[#0079bf] bg-[#00aecc]

    return (
      <div className={pageStyle}>
        <BoardHeader
          data={this.state.boardData}
          onChangeBoardTitle={this.handleBoardTitleChange}
        />
        <BoardLists
          data={this.state.boardData.lists}
          onSubmitNewList={this.handleSubmitNewList}
          inputAddNewList={this.state.inputAddNewList}
          onChangeInputAddNewList={this.handleChangeInputAddNewList}
          onSubmitNewCard={this.handleSubmitNewCard}
          inputAddNewCard={this.state.inputAddNewCard}
          onChangeInputAddNewCard={this.handleChangeInputAddNewCard}
          onChangeListTitle={this.handleChangeListTitle}
          onChangeCard={this.handleChangeCard}
          onArchiveList={this.handleArchiveList}
          onArchiveCard={this.handleArchiveCard}
        />
      </div>
    );
  }
}

export default BoardTemplate;
