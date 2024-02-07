export const ADD_TASK = "ADD_TASK";

export const addTodo = (valueTitle: string, valueDescription: string) => ({
  type: ADD_TASK,
  payload: {
    valueTitle,
    valueDescription,
  },
});
