import { ADD_TASK } from "./actions";

interface Task {
  id: number;
  title: string;
  text: string;
  type: string;
}
interface AppState {
  tasks: Task[];
}
const initialState: AppState = {
  tasks: [],
};

const appReducer = (state = initialState, action: any): AppState => {
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
export default appReducer;
