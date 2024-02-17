import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTasks } from "../../redux/Task/TaskSelector";
import { setFavorite } from "../../redux/Task/TaskActions";
import { removeTask } from "../../redux/Task/TaskActions";

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

  const updateFavoriteStatus = (id: number) => {
    dispatch(setFavorite(id));
  };

  const deleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar onAdd={openModal} />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header onAdd={openModal} />
        <TaskCards
          tasks={tasks}
          setFavoriteTask={updateFavoriteStatus}
          onRemoveTask={deleteTask}
        />
      </div>
      {isModalOpen && <ModalTask onClose={closeModal} />}
    </div>
  );
};

export default Homepage;
