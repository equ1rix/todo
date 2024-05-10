import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import {
  removeTask,
  updateTaskDueDate,
  setFavorite,
} from "redux/Task/TaskActions";
import { Filter, filters } from "helpers";
import { selectTasks } from "redux/Task/TaskSelector";
import { Task } from "redux/Task/TaskReducer";

import Sidebar from "components/sidebar";
import Header from "components/header";
import TaskCards from "components/taskCards";
import TasksBar from "components/tasksBar";
import {
  ModalDetailsContext,
  ModalDetailsContextProps,
} from "context/ModalTaskDetailsContext";

const Homepage = () => {
  const [selectedFilter, setSelectedFilter] = useState<Filter>(filters[0]);
  const [tasks, setTasks] = useState<Task[]>(useSelector(selectTasks));
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [foundTasksCount, setFoundTasksCount] = useState<number>(0);
  const allTasks = useSelector(selectTasks);

  const { openModalDetails } = useContext(
    ModalDetailsContext
  ) as ModalDetailsContextProps;
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const taskId = searchParams.get("taskId");
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskId) {
      openModalDetails(taskId);
    }
  }, [taskId]);

  const updateFavoriteStatus = (id: string) => {
    dispatch(setFavorite(id));
  };

  const deleteTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const onDueDateChange = (id: string, newDate: string) => {
    dispatch(updateTaskDueDate(id, newDate));
  };

  const handleFilterChange = (filter: Filter) => {
    setSelectedFilter(filter);
  };

  const filteredTasks = useSelector(selectedFilter.select);

  const tasksToShow =
    searchQuery.trim() === ""
      ? tasks
      : allTasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

  useEffect(() => {
    setTasks(filteredTasks);
    setFoundTasksCount(tasksToShow.length);
  }, [filteredTasks, tasksToShow]);

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
        <TasksBar title={selectedFilter.text} quantity={foundTasksCount} />
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
