import React from "react";

import { mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";

type TaskCardsProps = {
  tasks: Task[];
  onRemoveTask: (index: number) => void;
  onDueDateChange: (id: number, newDate: string) => void;
};

const TaskCards = ({
  tasks = [],
  onRemoveTask = mock,
  onDueDateChange = mock,
}: TaskCardsProps) => (
  <div className="grid grid-cols-5 gap-4 p-4 h-full">
    {tasks &&
      tasks.map((card: Task) => (
        <div key={card.id}>
          <Card
            {...card}
            onDelete={() => onRemoveTask(card.id)}
            onChangeDueDate={onDueDateChange}
          />
        </div>
      ))}
  </div>
);

export default TaskCards;
