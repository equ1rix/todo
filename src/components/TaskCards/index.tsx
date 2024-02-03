import React from "react";

import { mock } from "../../Helpers";

import Card from "../Card";

const dataMock = [
  { id: 1, title: "Task 1", text: "Drink tea", type: "PRIMARY" },
  { id: 2, title: "Task 2", text: "Sleep", type: "DEFAULT" },
  { id: 3, title: "Task 3", text: "Wake up", type: "DEFAULT" },
  { id: 4, title: "Task 4", text: "Open the door", type: "DEFAULT" },
];

const TaskCards = ({}) => {
  return (
    <div className="bg-modalBG grid grid-cols-5 gap-4 p-4 h-full">
      {dataMock.map((card) => (
        <div>
          <Card
            key={card.id}
            title={card.title}
            text={card.text}
            onDelete={mock}
            type={card.type}
          ></Card>
        </div>
      ))}
    </div>
  );
};

export default TaskCards;
