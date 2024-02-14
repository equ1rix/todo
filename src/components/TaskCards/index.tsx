import React from "react";

import { mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";

type TaskCardsProps = {
  tasks: Task[];
  onRemoveTask: (index: number) => void;
};

const TaskCards = ({ tasks = [], onRemoveTask = mock }: TaskCardsProps) => (
  <div className="grid grid-cols-5 gap-4 p-4 h-full">
    {tasks &&
      tasks.map((card: Task) => (
        <div>
          <Card
            title={card.title}
            text={card.description}
            type={card.type}
            onDelete={() => onRemoveTask(card.id)}
          />
        </div>
      ))}
  </div>
);

export default TaskCards;
