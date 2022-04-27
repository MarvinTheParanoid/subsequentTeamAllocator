import { UPDATE_FORM, ADD_TO_FORM, DELETE_FROM_FORM, UPDATE_GROUP_NAME } from "../actions/form";
import { v4 as uuidv4 } from "uuid";

//Main functions

//Starting with 3 input fields, users can add more input fields if there are more students in the group
const initialState = {
  groupName: "",
  students: [],
};

function form(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FORM:
      const id = uuidv4();
      return {
        ...state,
        students: [...state.students, { id, name: "" }],
      };

    case UPDATE_FORM:
      return { ...state, students: getUpdatedField(state.students, action.id, action.name) };

    case UPDATE_GROUP_NAME:
      return { ...state, groupName: action.groupName };

    case DELETE_FROM_FORM:
      return { ...state, students: state.students.filter((item) => item.id !== action.id) };

    default:
      return state;
  }
}
export default form;

//Helper functions

export function getUpdatedField(students, actionId, actionName) {
  return students.map((item) => {
    const name = item.id === actionId ? actionName : item.name;
    return { ...item, name };
  });
}

// export function getNewForm(form, info) {
//   let exists = false;
//   const newCart = form.map((item) => {
//     // If the id already exists, the quantity will be incremented.
//     if (item.id === product.id) {
//       item.quantity += 1;
//       exists = true;
//     }
//     return item;
//   });

//   if (exists) {
//     return newForm;
//   } else {
//     // If the id doesn't exist, it will be added with a quantity of 1.
//     newCart.push({ ...product, quantity: 1 });
//     return newCart;
//   }
// }
