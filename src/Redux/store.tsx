import { createStore, combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import TaskReducer, {
  REDUCER_NAME as TASK_REDUCER_NAME,
} from "./Task/TaskReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [TASK_REDUCER_NAME]: TaskReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);
export default store;
