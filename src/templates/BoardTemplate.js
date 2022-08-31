import React from "react";
import BoardHeader from "./../organisms/BoardHeader";

class BoardTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardData: this.props.data,
      inputAddNewList: "",
      inputAddNewCard: ""
    };

    this.handleBoardTitleChange = this.handleBoardTitleChange.bind(this);

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
      </div>
    );
  }
}

export default BoardTemplate;
