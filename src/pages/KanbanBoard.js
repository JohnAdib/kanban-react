import React from "react";
import { data } from "./data.js";
import Storage from "../tools/Storage";
import BoardTemplate from "../templates/BoardTemplate";

function KanbanBoard (props) {

  function getData() {
    const storage = new Storage();
    const myData = storage.get("boardData");

    if (myData) {
      return myData;
    }

    return nullData();
  }

  function nullData() {
    setData(data);
    return data;
  }

  function setData(data) {
    if (!data) {
      return;
    }
    console.log(data);
    const storage = new Storage();
    storage.set("boardData", data);
  }

  return (
    <BoardTemplate
      data={getData()}
      onBoardDataChange={(i) => setData(i)}
    />
  );
}

export default KanbanBoard;
