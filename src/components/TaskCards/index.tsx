import React from "react";

import { mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";

type TaskCardsProps = {
  tasks: Task[];
  removeTodo: (index: number) => void;
};

const TaskCards = ({ tasks, removeTodo = mock }: TaskCardsProps) => (
  <div className="grid grid-cols-5 gap-4 p-4 h-full">
    {tasks &&
      tasks.map((card: Task, index: number) => (
        <div key={index}>
          <Card
            title={card.title}
            text={card.description}
            type={card.type}
            onDelete={() => removeTodo(index)}
          />
        </div>
      ))}
  </div>
);

export default TaskCards;
