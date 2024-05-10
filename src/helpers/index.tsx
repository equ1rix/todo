import { AppState, Task } from "src/redux/Task/TaskReducer";
import {
  favoriteTasksSelector,
  selectTasks,
  todaysTasksSelector,
  weekTasksSelector,
} from "src/redux/Task/TaskSelector";

export const mock = () => {};

export const getFormattedDate = (date = new Date()) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("en", { month: "short" });
  const day = currentDate.getDate();
  return `${year}, ${month} ${day}`;
};

export const calculateDueDateApproaching = (dueDate: string) => {
  const approachingThreshold = 24 * 60 * 60 * 1000;
  const timeDifference = new Date(dueDate).getTime() - new Date().getTime();
  return timeDifference <= approachingThreshold;
};

export interface Filter {
  text: string;
  isActive: boolean;
  id: number;
  select: (state: { [REDUCER_NAME: string]: AppState }) => Task[];
}

export const filters: Filter[] = [
  {
    id: 0,
    text: "Today's tasks",
    isActive: true,
    select: todaysTasksSelector,
  },
  {
    id: 1,
    text: "This week tasks",
    isActive: false,
    select: weekTasksSelector,
  },
  {
    id: 2,
    text: "All tasks",
    isActive: false,
    select: selectTasks,
  },
  {
    id: 3,
    text: "Favorite tasks",
    isActive: false,
    select: favoriteTasksSelector,
  },
];
