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

    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);
    this.handleChangeInputAddNewList =
      this.handleChangeInputAddNewList.bind(this);
    this.handleSubmitNewList = this.handleSubmitNewList.bind(this);
    this.handleChangeListTitle = this.handleChangeListTitle.bind(this);
    this.handleArchiveList = this.handleArchiveList.bind(this);

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
    const myTitle = newTitle ? newTitle : this.state.boardData.title;
    // update page title
    document.title = myTitle + " | " + this.state.boardData.brand;
  }

  handleChangeInputAddNewList(event) {
    this.setState({ inputAddNewList: event.target.value });
  }

  handleSubmitNewList(event) {
    event.preventDefault();
    const myData = { ...this.state.boardData };
    let newTitle = this.state.inputAddNewList;
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

  render() {
    let pageStyle =
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
          onChangeListTitle={this.handleChangeListTitle}
          onArchiveList={this.handleArchiveList}
        />
      </div>
    );
  }
}

export default BoardTemplate;
