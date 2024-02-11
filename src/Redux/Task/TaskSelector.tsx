import { createSelector } from "reselect";

import { REDUCER_NAME } from "./TaskActions";
import { AppState } from "./TaskReducer";

const selectTaskState = (state: { [REDUCER_NAME: string]: AppState }) =>
  state[REDUCER_NAME];

export const selectTasks = createSelector(
  [selectTaskState],
  (taskState) => taskState.tasks
);
