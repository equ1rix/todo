import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectTasks } from "../../redux/Task/TaskSelector";

import Sidebar from "../Sidebar";
import Header from "../Header";
import TaskCards from "../TaskCards";
import ModalTask from "../ModalTask";

const Homepage = () => {
  const tasks = useSelector(selectTasks);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar onAdd={openModal} />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header onAdd={openModal} />
        <TaskCards tasks={tasks} />
      </div>
      {isModalOpen && <ModalTask onClose={closeModal} />}
    </div>
  );
};

export default Homepage;
