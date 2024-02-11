import { ADD_TASK, REDUCER_NAME } from "./TaskActions";

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

    default:
      return state;
  }
};
export default TaskReducer;
