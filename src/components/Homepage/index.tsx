import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectTasks } from "../../redux/Task/TaskSelector";

import Sidebar from "../Sidebar";
import Header from "../Header";
import TaskCards from "../TaskCards";
import ModalTask from "../ModalTask";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/Task/TaskActions";

const Homepage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removeTodoHandler = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar onAdd={openModal} />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header onAdd={openModal} />
        <TaskCards removeTodo={removeTodoHandler} tasks={tasks} />
      </div>
      {isModalOpen && <ModalTask onClose={closeModal} />}
    </div>
  );
};

export default Homepage;
