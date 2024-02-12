import React from "react";

import { mock } from "../../Helpers";
import { Task } from "../../redux/Task/TaskReducer";

import Card from "../Card";

type TaskCardsProps = {
  tasks: Task[];
  isFavorite: (id: number) => void;
};

const TaskCards = ({ tasks, isFavorite = mock }: TaskCardsProps) => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4 h-full">
      {tasks &&
        tasks.map((card: Task) => (
          <div key={card.id}>
            <Card
              title={card.title}
              text={card.description}
              onDelete={mock}
              onFavorite={() => isFavorite(card.id)}
              favoriteColor={card.checked ? "#f43f5e" : "#ffffff"}
            />
          </div>
        ))}
    </div>
  );
};
export default TaskCards;
