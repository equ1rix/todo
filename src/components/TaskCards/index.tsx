import React from "react";
import { useSelector } from "react-redux";

import { mock } from "../../Helpers";

import Card from "../Card";

const TaskCards = ({}) => {
  const tasks = useSelector((state: any) => state.tasks);

  if (!Array.isArray(tasks) || tasks.length === 0) {
    return null;
  }
  return (
    <div className="grid grid-cols-5 gap-4 p-4 h-full">
      {tasks.map(
        (
          card: { valueTitle: string; valueDescription: string; type: string },
          index: number
        ) => (
          <div key={index}>
            <Card
              title={card.valueTitle}
              text={card.valueDescription}
              type={card.type}
              onDelete={mock}
            />
          </div>
        )
      )}
    </div>
  );
};

export default TaskCards;
