import React from "react";
import { useDispatch } from "react-redux";
import { updateForm, updateGroupName, delInputGroupForm } from "../actions/form";

function FormGroupName(props) {
  const dispatch = useDispatch();

  function update(e) {
    const input = e.target.value;
    dispatch(updateGroupName(input));
  }

  return (
    <>
      <label>
        Group Name: <input type="text" value={props.groupName} onChange={update} />
      </label>
    </>
  );
}

export default FormGroupName;
