export const REDUCER_NAME = "TASK";
export const ADD_TASK = `${REDUCER_NAME}/ADD_TASK`;
export const REMOVE_TASK = `${REDUCER_NAME}/REMOVE_TASK`;
export const UPDATE_TASK_DUE_DATE = `${REDUCER_NAME}/UPDATE_TASK_DUE_DATE`;

export const addTask = ({
  title,
  description,
  dueDate,
  createDate,
}: {
  title: string;
  description: string;
  dueDate: Date;
  createDate: Date;
}) => ({
  type: ADD_TASK,
  payload: {
    title,
    description,
    dueDate,
    createDate,
  },
});

export const removeTask = (id: number) => ({
  type: REMOVE_TASK,
  payload: { id },
});

export const updateTaskDueDate = (id: number, dueDate: Date) => ({
  type: UPDATE_TASK_DUE_DATE,
  payload: {
    id,
    dueDate,
  },
});
