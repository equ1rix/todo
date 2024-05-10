import { defaultTasks } from "src/helpers/mock";
import {
  ADD_TASK,
  REDUCER_NAME,
  SET_FAVORITE,
  REMOVE_TASK,
  UPDATE_TASK_DUE_DATE,
  UPDATE_TASK_DETAILS,
} from "./TaskActions";
import { v4 as uuidv4 } from "uuid";

export { REDUCER_NAME };

export interface Task {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
  type: string;
  dueDate: string;
  createdAt: string;
}
export interface AppState {
  tasks: Task[];
}
const initialState: AppState = {
  tasks: defaultTasks,
};

const TaskReducer = (state = initialState, action: any): AppState => {
  switch (action.type) {
    case ADD_TASK:
      const newTask: Task = {
        id: uuidv4(),
        ...action.payload,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case SET_FAVORITE:
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((card) =>
          card.id === id
            ? {
                ...card,
                isFavorite: !card.isFavorite,
              }
            : card
        ),
      };

    case REMOVE_TASK:
      const { id: taskId } = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== taskId),
      };

    case UPDATE_TASK_DUE_DATE:
      const { id: cardId, dueDate } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === cardId ? { ...task, dueDate } : task
        ),
      };

    case UPDATE_TASK_DETAILS:
      const { id: updatedTaskId, ...updatedDetails } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatedTaskId ? { ...task, ...updatedDetails } : task
        ),
      };

    default:
      return state;
  }
};
export default TaskReducer;
