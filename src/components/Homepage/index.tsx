import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTasks } from "../../redux/Task/TaskSelector";
import { toggleFavorite } from "../../redux/Task/TaskActions";

import Sidebar from "../Sidebar";
import Header from "../Header";
import TaskCards from "../TaskCards";
import ModalTask from "../ModalTask";

const Homepage = () => {
  const tasks = useSelector(selectTasks);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
    setIsFavorite(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onCheckboxChange = (checked: boolean) => {
    setIsFavorite(checked);
  };

  const handleFavoriteToggle = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar onAdd={openModal} />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header onAdd={openModal} />
        <TaskCards tasks={tasks} isFavorite={handleFavoriteToggle} />
      </div>
      {isModalOpen && (
        <ModalTask
          onClose={closeModal}
          checked={isFavorite}
          onChange={onCheckboxChange}
        />
      )}
    </div>
  );
};

export default Homepage;
