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
