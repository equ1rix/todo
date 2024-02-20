import {
  ADD_TASK,
  REDUCER_NAME,
  REMOVE_TASK,
  UPDATE_TASK_DUE_DATE,
} from "./TaskActions";
import { v4 as uuidv4 } from "uuid";

export { REDUCER_NAME };

export interface Task {
  id: number;
  title: string;
  description: string;
  type: string;
  dueDate: string;
}
export interface AppState {
  tasks: Task[];
}
const initialState: AppState = {
  tasks: [],
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
    case REMOVE_TASK:
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== id),
      };

    case UPDATE_TASK_DUE_DATE:
      const { id: taskId, dueDate } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === taskId ? { ...task, dueDate } : task
        ),
      };

    default:
      return state;
  }
};
export default TaskReducer;
