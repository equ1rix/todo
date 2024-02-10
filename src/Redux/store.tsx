import { createStore, combineReducers } from "redux";
import TaskReducer, {
  REDUCER_NAME as TASK_REDUCER_NAME,
} from "./Task/TaskReducer";

const rootReducer = combineReducers({
  [TASK_REDUCER_NAME]: TaskReducer,
});

const store = createStore(rootReducer);

export default store;
