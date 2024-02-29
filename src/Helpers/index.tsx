export const mock = () => {};

export const getFormattedDate = (date = new Date()) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("en", { month: "short" });
  const day = currentDate.getDate();
  return `${year}, ${month} ${day}`;
};

export const calculateDueDateApproaching = (dueDate: string) => {
  const approachingThreshold = 24 * 60 * 60 * 1000;
  const timeDifference = new Date(dueDate).getTime() - new Date().getTime();
  return timeDifference <= approachingThreshold;
};
