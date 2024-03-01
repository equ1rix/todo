import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  favoriteTasksSelector,
  selectTasks,
  todaysTasksSelector,
  weekTasksSelector,
} from "../../redux/Task/TaskSelector";
import {
  removeTask,
  updateTaskDueDate,
  setFavorite,
} from "../../redux/Task/TaskActions";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskCards from "../../components/TaskCards";
import TasksBar from "../../components/TasksBar";

const Homepage = () => {
  const [selectedFilter, setSelectedFilter] = useState<number>(0);
  const [selectedName, setSelectedName] = useState<string>("Today`s tasks");
  const dispatch = useDispatch();

  const allTasks = useSelector(selectTasks);
  const favoriteTasks = useSelector(favoriteTasksSelector);
  const weekTasks = useSelector(weekTasksSelector);
  const todaysTasks = useSelector(todaysTasksSelector);

  const tasksToRender = (() => {
    switch (selectedFilter) {
      case 0:
        return todaysTasks;
      case 1:
        return weekTasks;
      case 2:
        return allTasks;
      case 3:
        return favoriteTasks;
      default:
        return [];
    }
  })();

  const quantityTasks = tasksToRender.length;

  const updateFavoriteStatus = (id: number) => {
    dispatch(setFavorite(id));
  };

  const deleteTask = (id: number) => {
    dispatch(removeTask(id));
  };

  const onDueDateChange = (id: number, newDate: string) => {
    dispatch(updateTaskDueDate(id, newDate));
  };

  const handleFilterChange = (id: number, title: string) => {
    setSelectedFilter(id);
    setSelectedName(title);
  };

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar onChange={handleFilterChange} />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header />
        <TasksBar title={selectedName} quantity={quantityTasks} />
        <TaskCards
          tasks={tasksToRender}
          setFavoriteTask={updateFavoriteStatus}
          onRemoveTask={deleteTask}
          onDueDateChange={onDueDateChange}
        />
      </div>
    </div>
  );
};

export default Homepage;
