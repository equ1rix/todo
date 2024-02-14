import React from "react";

import { mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";

type TaskCardsProps = {
  tasks: Task[];
  setFavoriteTask: (id: number) => void;
};

const TaskCards = ({ tasks, setFavoriteTask = mock }: TaskCardsProps) => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 h-full">
      {tasks &&
        tasks.map((card: Task) => (
          <div key={card.id}>
            <Card
              title={card.title}
              text={card.description}
              onDelete={mock}
              onSetFavorite={() => setFavoriteTask(card.id)}
              isFavorite={card.isFavorite}
            />
          </div>
        ))}
    </div>
  );
};
export default TaskCards;
