import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroups } from "../actions/groups";
useEffect

//Component import
import GroupsItems from "./GroupsItems";

function Groups() {
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
  }, []);

  return groups.map((group, i) => (
    <GroupsItems key={i} groupName={group.groupName} count={group.count} />
  ));
}

export default Groups;
