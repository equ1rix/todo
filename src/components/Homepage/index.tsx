import React from "react";

import { getFormattedDate, mock } from "../../Helpers";

import Sidebar from "../Sidebar";
import Header from "../Header";
import TaskCards from "../TaskCards";

const Homepage = ({}) => {
  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[100%]">
        <Header onAdd={mock} date={getFormattedDate()} />
        <TaskCards />
      </div>
    </div>
  );
};

export default Homepage;
