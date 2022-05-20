import { FETCH_GROUPS_SUCCESS } from "../actions/groups";

function groups(state = [], action) {
  switch (action.type) {
    case FETCH_GROUPS_SUCCESS:
      return action.groups;

    default:
      return state;
  }
}

export default groups;
