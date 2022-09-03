import React from "react";
import Select from "./../atoms/Select";
import Label from "./../atoms/Label";

function Selectbox(props) {
  return (
    <div className="mb-2">
      <Label htmlFor={props.id} className="text-stone-700 w-full block">
        {props.title}
      </Label>
      <Select
        id={props.id}
        className="w-full p-2 rounded"
        options={props.options}
        selected={props.selected}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Selectbox;
