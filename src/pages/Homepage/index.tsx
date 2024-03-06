import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
  removeTask,
  updateTaskDueDate,
  setFavorite,
} from "../../redux/Task/TaskActions";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskCards from "../../components/TaskCards";
import TasksBar from "../../components/TasksBar";
import { Filter, filters } from "../../Helpers";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/Task/TaskSelector";
import { Task } from "../../redux/Task/TaskReducer";

const Homepage = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>(filters[0]);
  const [tasks, setTasks] = useState<Task[]>(useSelector(selectTasks));
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

  const handleFilterChange = (filter: Filter) => {
    setSelectedFilter(filter);
  };

  const filteredTasks = useSelector(selectedFilter.select);

  useEffect(() => {
    setTasks(filteredTasks);
  }, [filteredTasks]);

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar
          activeFilter={selectedFilter}
          onFilterClick={handleFilterChange}
        />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header />
        <TasksBar title={selectedFilter.text} quantity={tasks.length} />
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
