import React from "react";

import { mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";

type TaskCardsProps = {
  tasks: Task[];
  setFavoriteTask: (id: number) => void;
  onRemoveTask: (id: number) => void;
};

const TaskCards = ({
  tasks = [],
  onRemoveTask = mock,
  setFavoriteTask = mock,
}: TaskCardsProps) => (
  <div className="grid grid-cols-5 gap-4 p-4 h-full">
    {tasks &&
      tasks.map((card: Task) => (
        <div key={card.id}>
          <Card
            title={card.title}
            text={card.description}
            onDelete={() => onRemoveTask(card.id)}
            onSetFavorite={() => setFavoriteTask(card.id)}
            isFavorite={card.isFavorite}
          />
        </div>
      ))}
  </div>
);
export default TaskCards;
