export const REDUCER_NAME = "TASK";
export const ADD_TASK = `${REDUCER_NAME}/ADD_TASK`;
export const SET_FAVORITE = `${REDUCER_NAME}/SET_FAVORITE`;
export const REMOVE_TASK = `${REDUCER_NAME}/REMOVE_TASK`;
export const UPDATE_TASK_DUE_DATE = `${REDUCER_NAME}/UPDATE_TASK_DUE_DATE`;
export const UPDATE_TASK_DETAILS = `${REDUCER_NAME}/UPDATE_TASK_DETAILS`;

export const addTask = ({
  title,
  description,
  isFavorite,
  dueDate,
  createdAt,
}: {
  title: string;
  description: string;
  isFavorite: boolean;
  dueDate: string;
  createdAt: string;
}) => ({
  type: ADD_TASK,
  payload: {
    title,
    description,
    isFavorite,
    dueDate,
    createdAt,
  },
});

export const setFavorite = (id: number) => ({
  type: SET_FAVORITE,
  payload: { id },
});

export const removeTask = (id: number) => ({
  type: REMOVE_TASK,
  payload: { id },
});

export const updateTaskDueDate = (id: number, dueDate: string) => ({
  type: UPDATE_TASK_DUE_DATE,
  payload: {
    id,
    dueDate,
  },
});

export const updateTaskDetails = ({
  id,
  title,
  description,
  isFavorite,
  dueDate,
}: {
  id: number;
  title: string;
  description: string;
  isFavorite: boolean;
  dueDate: string;
}) => ({
  type: UPDATE_TASK_DETAILS,
  payload: {
    id,
    title,
    description,
    isFavorite,
    dueDate,
  },
});
