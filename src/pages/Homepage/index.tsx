import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTasks } from "../../redux/Task/TaskSelector";
import { removeTask, updateTaskDueDate } from "../../redux/Task/TaskActions";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskCards from "../../components/TaskCards";
import ModalTask from "../../components/ModalTask";

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

  const deleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  const getNewDueDate = (id: number, newDate: string) => {
    dispatch(updateTaskDueDate(id, newDate));
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar onAdd={openModal} />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header onAdd={openModal} />
        <TaskCards
          onRemoveTask={deleteTask}
          tasks={tasks}
          getNewDueDate={getNewDueDate}
        />
      </div>
      {isModalOpen && <ModalTask onClose={closeModal} />}
    </div>
  );
};

export default Homepage;
