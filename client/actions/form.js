export const ADD_TO_FORM = "ADD_TO_FORM";
export const DELETE_FROM_FORM = "DELETE_FROM_FORM";
export const UPDATE_FORM = "UPDATE_FORM";
export const UPDATE_GROUP_NAME = "UPDATE_GROUP_NAME";
import { postGroupForm } from "../api/groups";

export function addToGroupForm() {
  return {
    type: ADD_TO_FORM,
  };
}

export function updateForm(id, name) {
  return {
    type: UPDATE_FORM,
    id,
    name,
  };
}

export function delInputGroupForm(id) {
  return {
    type: DELETE_FROM_FORM,
    id,
  };
}

export function updateGroupName(groupName) {
  return {
    type: UPDATE_GROUP_NAME,
    groupName,
  };
}

//add details after connected to back-end
export function submitGroupForm(info) {
  return (dispatch) => {
    return postGroupForm(info);
  };
}
