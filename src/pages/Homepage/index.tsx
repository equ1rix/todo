import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectTasks } from "../../redux/Task/TaskSelector";
import {
  removeTask,
  updateTaskDueDate,
  setFavorite,
} from "../../redux/Task/TaskActions";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskCards from "../../components/TaskCards";

const Homepage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const updateFavoriteStatus = (id: number) => {
    dispatch(setFavorite(id));
  };

  const deleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  const onDueDateChange = (id: number, newDate: string) => {
    dispatch(updateTaskDueDate(id, newDate));
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header />
        <TaskCards
          tasks={tasks}
          setFavoriteTask={updateFavoriteStatus}
          onRemoveTask={deleteTask}
          onDueDateChange={onDueDateChange}
        />
      </div>
    </div>
  );
};

export default Homepage;
