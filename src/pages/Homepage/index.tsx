import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  removeTask,
  updateTaskDueDate,
  setFavorite,
} from "../../redux/Task/TaskActions";
import { Element } from "../../components/Sidebar";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskCards from "../../components/TaskCards";
import TasksBar from "../../components/TasksBar";

const Homepage = () => {
  const [selectedFilter, setSelectedFilter] = useState<Element>({
    id: 0,
    text: "Today's tasks",
    isActive: true,
    select: [],
  });
  const dispatch = useDispatch();

  const updateFavoriteStatus = (id: number) => {
    dispatch(setFavorite(id));
  };

  const deleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  const onDueDateChange = (id: number, newDate: string) => {
    dispatch(updateTaskDueDate(id, newDate));
  };

  const handleFilterChange = (filter: Element) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar onFilterClick={handleFilterChange} />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header />
        <TasksBar
          title={selectedFilter.text}
          quantity={selectedFilter.select.length}
        />
        <TaskCards
          tasks={selectedFilter.select}
          setFavoriteTask={updateFavoriteStatus}
          onRemoveTask={deleteTask}
          onDueDateChange={onDueDateChange}
        />
      </div>
    </div>
  );
};

export default Homepage;
