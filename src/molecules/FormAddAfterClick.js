import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import IconPlus from "../atoms/IconPlus";

function FormAddAfterClick(props) {
  const [isFormVisible, setActive] = useState(false);
  const visibleForm = () => {
    setActive(true);
  };
  const hideForm = (e) => {
    if (e.relatedTarget && e.relatedTarget.parentNode.constructor.name === "HTMLFormElement") {
      if (!e.target.value) {
        // if click on btn, set focus on input
        e.target.focus();
      }
      // don't close form if user click on btn or some element inside from
      return true;
    }
    setActive(false);
  };

  let newListContainer = "relative rounded transition ease-in-out";
  let addAnotherListClass = "flex flex-nowrap items-center cursor-pointer";
  let formClass = "flex1 flex-row gap-1 rounded";

  if (props.theme === "black") {
    addAnotherListClass += " text-slate-700";
  } else {
    newListContainer += " p-1";
    addAnotherListClass += " text-white px-2";
  }

  if (isFormVisible) {
    newListContainer += props.theme === "black" ? "" : " bg-slate-100";
    addAnotherListClass += " hidden";
  } else {
    formClass += " hidden";
    if (props.theme === "black") {
      newListContainer += " text-black hover:bg-black/10 active:bg-black/20";
    } else {
      newListContainer += " bg-white/20 hover:bg-white/30 active:bg-white/40";
    }
  }

  return (
    <div className={newListContainer}>
      <div className={addAnotherListClass} onClick={visibleForm}>
        <IconPlus size="26" />
        <span className="grow leading-8">{props.title}</span>
      </div>

      <form className={formClass} onSubmit={props.onSubmit} data-list={props.idList}>
        <Input
          type="text"
          value={props.value}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange(e.target.value)}
          onBlur={hideForm}
          className="w-full grow mb-1 leading-9"
        />
        <Button className="px-3 py-1 rounded leading-7 bg-blue-600 hover:bg-blue-800 text-white">
          {props.btnText}
        </Button>
      </form>
    </div>
  );
}

export default FormAddAfterClick;
