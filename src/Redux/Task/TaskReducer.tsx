import { ADD_TASK, REDUCER_NAME, IS_FAVORITE } from "./TaskActions";

export { REDUCER_NAME };

export interface Task {
  id: number;
  title: string;
  description: string;
  checked: boolean;
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
        id: state.tasks.length,
        ...action.payload,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case IS_FAVORITE:
      const { id } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((card) =>
          card.id === id
            ? {
                ...card,
                checked: !card.checked,
              }
            : card
        ),
      };

    default:
      return state;
  }
};
export default TaskReducer;
