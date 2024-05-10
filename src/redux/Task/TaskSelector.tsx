import { createSelector } from "reselect";

import { REDUCER_NAME } from "./TaskActions";
import { AppState } from "./TaskReducer";
import { calculateDueDateApproaching } from "src/helpers";
import { isSameWeek, startOfWeek } from "date-fns";

const selectTaskState = (state: { [REDUCER_NAME: string]: AppState }) =>
  state[REDUCER_NAME];

export const selectTasks = createSelector(
  [selectTaskState],
  (taskState) => taskState.tasks
);

export const favoriteTasksSelector = createSelector(
  [selectTaskState],
  (taskState) => taskState.tasks.filter((task) => task.isFavorite)
);

export const todaysTasksSelector = createSelector(
  [selectTaskState],
  (tastState) =>
    tastState.tasks.filter((task) => calculateDueDateApproaching(task.dueDate))
);

export const weekTasksSelector = createSelector(
  [selectTaskState],
  (taskState) => {
    const startOfCurrentWeek = startOfWeek(new Date(), { weekStartsOn: 1 });

    return taskState.tasks.filter((task) =>
      isSameWeek(new Date(task.dueDate), startOfCurrentWeek, {
        weekStartsOn: 1,
      })
    );
  }
);
