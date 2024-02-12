import { ADD_TASK, REDUCER_NAME, REMOVE_TASK } from "./TaskActions";
import { v4 as uuidv4 } from "uuid";

export { REDUCER_NAME };

export interface Task {
  id: number;
  title: string;
  description: string;
  type: string;
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
    default:
      return state;
  }
};
export default TaskReducer;