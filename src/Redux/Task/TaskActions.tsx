export const REDUCER_NAME = "TASK";
export const ADD_TASK = `${REDUCER_NAME}/ADD_TASK`;
export const IS_FAVORITE = `${REDUCER_NAME}/IS_FAVORITE`;

export const addTodo = ({
  title,
  description,
  checked,
}: {
  title: string;
  description: string;
  checked: boolean;
}) => ({
  type: ADD_TASK,
  payload: {
    title,
    description,
    checked,
  },
});

export const toggleFavorite = (id: number) => ({
  type: IS_FAVORITE,
  payload: { id },
});
