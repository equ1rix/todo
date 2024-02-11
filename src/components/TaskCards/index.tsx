import React from "react";

import { mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";

type TaskCardsProps = {
  tasks: Task[];
};

const TaskCards = ({ tasks }: TaskCardsProps) => (
  <div className="grid grid-cols-5 gap-4 p-4 h-full">
    {tasks &&
      tasks.map((card: Task, index: number) => (
        <div key={index}>
          <Card
            title={card.title}
            text={card.description}
            type={card.type}
            onDelete={mock}
          />
        </div>
      ))}
  </div>
);

export default TaskCards;
