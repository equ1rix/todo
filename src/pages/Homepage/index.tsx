import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeTask,
  updateTaskDueDate,
  setFavorite,
} from "../../redux/Task/TaskActions";
import { Filter, filters } from "../../Helpers";
import { selectTasks } from "../../redux/Task/TaskSelector";
import { Task } from "../../redux/Task/TaskReducer";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import TaskCards from "../../components/TaskCards";
import TasksBar from "../../components/TasksBar";

const Homepage = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>(filters[0]);
  const [tasks, setTasks] = useState<Task[]>(useSelector(selectTasks));
  const [searchQuery, setSearchQuery] = useState<string>("");

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

  const tasksToShow = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-[100vh]">
      <div className="w-[450px] ">
        <Sidebar
          activeFilter={selectedFilter}
          onFilterClick={handleFilterChange}
        />
      </div>
      <div className="flex flex-col w-[100%] bg-modalBG">
        <Header onChange={setSearchQuery} value={searchQuery} />
        <TasksBar title={selectedFilter.text} quantity={tasks.length} />
        <TaskCards
          tasks={tasksToShow}
          setFavoriteTask={updateFavoriteStatus}
          onRemoveTask={deleteTask}
          onDueDateChange={onDueDateChange}
        />
      </div>
    </div>
  );
};

export default Homepage;
