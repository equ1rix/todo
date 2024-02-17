export const REDUCER_NAME = "TASK";
export const ADD_TASK = `${REDUCER_NAME}/ADD_TASK`;
export const SET_FAVORITE = `${REDUCER_NAME}/SET_FAVORITE`;
export const REMOVE_TASK = `${REDUCER_NAME}/REMOVE_TASK`;

export const addTask = ({
  title,
  description,
  isFavorite,
}: {
  title: string;
  description: string;
  isFavorite: boolean;
}) => ({
  type: ADD_TASK,
  payload: {
    title,
    description,
    isFavorite,
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
