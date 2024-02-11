import { number } from "yargs";

export const REDUCER_NAME = "TASK";
export const ADD_TASK = `${REDUCER_NAME}/ADD_TASK`;
export const REMOVE_TASK = `${REDUCER_NAME}/DELETE_TASK`;

export const addTodo = ({
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

export const removeTodo = (index: number) => ({
  type: REMOVE_TASK,
  payload: index,
});
