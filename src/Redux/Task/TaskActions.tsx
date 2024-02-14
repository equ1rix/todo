export const REDUCER_NAME = "TASK";
export const ADD_TASK = `${REDUCER_NAME}/ADD_TASK`;
export const REMOVE_TASK = `${REDUCER_NAME}/REMOVE_TASK`;

export const addTask = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => ({
  type: ADD_TASK,
  payload: {
    title,
    description,
  },
});

export const removeTask = (id: number) => ({
  type: REMOVE_TASK,
  payload: { id },
});
