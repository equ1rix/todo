import React from "react";

import { calculateDueDateApproaching, mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";

type TaskCardsProps = {
  tasks: Task[];
  onRemoveTask: (index: number) => void;
  onDueDateChange: (id: number, newDate: string) => void;
  setFavoriteTask: (id: number) => void;
  searchQuery: string;
};

const TaskCards = ({
  tasks = [],
  onRemoveTask = mock,
  onDueDateChange = mock,
  setFavoriteTask = mock,
  searchQuery,
}: TaskCardsProps) => {
  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="grid grid-cols-5 gap-4 p-4 h-full">
      {filteredTasks &&
        filteredTasks.map((card: Task) => (
          <div key={card.id}>
            <Card
              {...card}
              onDelete={() => onRemoveTask(card.id)}
              isOutdated={calculateDueDateApproaching(card.dueDate)}
              onChangeDueDate={onDueDateChange}
              onSetFavorite={() => setFavoriteTask(card.id)}
            />
          </div>
        ))}
    </div>
  );
};

export default TaskCards;
