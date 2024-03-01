type TasksBarProps = {
  title: string;
  quantity: number;
};

const TasksBar = ({ title, quantity }: TasksBarProps) => {
  const taskWord = quantity === 1 ? "task" : "tasks";
  return (
    <div className="text-text-primary text-2xl font-bold py-2 pl-9">
      {title} ({quantity} {taskWord})
    </div>
  );
};

export default TasksBar;
