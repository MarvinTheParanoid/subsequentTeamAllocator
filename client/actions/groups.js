import { getGroups } from "../api/groups";

export const FETCH_GROUPS_SUCCESS = "FETCH_GROUPS_SUCCESS";

//Main functions
export function fetchGroups() {
  return (dispatch) => {
    return getGroups()
      .then((groups) => {
        dispatch(fetchGroupsSuccess(groups));
        return null;
      })
      .catch((err) => console.error(err));
  };
}

//Helper functions
export function fetchGroupsSuccess(groups) {
  return {
    type: FETCH_GROUPS_SUCCESS,
    groups,
  };
}
