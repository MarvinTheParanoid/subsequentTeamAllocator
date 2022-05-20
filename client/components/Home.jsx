import React from "react";
import Header from "./elements/Header";
import Groups from "./Groups";
import CreateGroup from "./elements/CreateGroup";

function Home() {
  return (
    <>
      <Header headerName="FRIDAY PROJECTS" />
      <CreateGroup />
      <Groups />
    </>
  );
}

export default Home;
