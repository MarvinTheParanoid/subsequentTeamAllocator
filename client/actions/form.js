export const ADD_TO_FORM = "ADD_TO_FORM";
export const DELETE_FROM_FORM = "DELETE_FROM_FORM";
export const UPDATE_FORM = "UPDATE_FORM";
export const UPDATE_GROUP_NAME = "UPDATE_GROUP_NAME";
import { postGroupForm } from "../api/groups";

export function addToGroupForm(form) {
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
export function submitGroupForm(info) {
  return (dispatch) => {
    return postGroupForm(info);
  };
}

// export function deleteFromCart(id) {
//   return {
//     type: DELETE_FROM_FORM,
//     id,
//   };
// }
