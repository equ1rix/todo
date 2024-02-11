import { ADD_TASK, REDUCER_NAME, REMOVE_TASK } from "./TaskActions";

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
      const newTask: Task = action.payload;
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case REMOVE_TASK:
      const updatedTasks = [...state.tasks];
      updatedTasks.splice(action.payload.index, 1);
      return {
        ...state,
        tasks: updatedTasks,
      };

    default:
      return state;
  }
};
export default TaskReducer;
