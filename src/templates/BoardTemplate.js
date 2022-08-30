import React from "react";
import BoardHeader from "./../organisms/BoardHeader";

class BoardTemplate extends React.Component {
  render() {
    let pageStyle =
      "h-screen overflow-hidden select-none flex flex-col bg-[#0079bf]";
    // bg-[#0079bf] bg-[#00aecc]

    return (
      <div className={pageStyle}>
        <BoardHeader data={this.props.data} />
      </div>
    );
  }
}

export default BoardTemplate;
