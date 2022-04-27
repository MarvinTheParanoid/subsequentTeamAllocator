import { UPDATE_FORM, ADD_TO_FORM, DELETE_FROM_FORM, UPDATE_GROUP_NAME } from "../actions/form";

//Main functions
const initialState = {
  groupName: "",
  students: [
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
  ],
};

function form(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_FORM:
      return {
        ...state,
        students: [...state.students, { id: state.students.length + 1, name: "" }],
      };

    case UPDATE_FORM:
      return { ...state, students: getUpdatedField(state.students, action.id, action.name) };

    case UPDATE_GROUP_NAME:
      return getUpdatedField(state, action.groupName);

    default:
      return state;
    // case DELETE_FROM_CART:
    //   return state.filter((item) => item.id !== action.id);
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
