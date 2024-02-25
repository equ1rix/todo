import React, { useEffect, useState } from "react";

import { mock } from "../../Helpers";

import { DeleteButton } from "../IconButton";
import DatePicker from "../DatePicker";
import { useSelector } from "react-redux";
import { selectTasks } from "../../redux/Task/TaskSelector";

export const CARD_TYPE = {
  PRIMARY: "PRIMARY",
  DEFAULT: "DEFAULT",
};

type CardType = (typeof CARD_TYPE)[keyof typeof CARD_TYPE];

const CARD_STYLE: Record<CardType, string> = {
  PRIMARY:
    "flex flex-col bg-primaryBG rounded-lg text-text-primary py-2 px-4 w-[100%]",
  DEFAULT:
    "flex flex-col bg-defaultBG rounded-lg text-text-default py-2 px-4 w-[100%]",
};

type CardProps = {
  onDelete: () => void;
  onChangeDueDate: (id: number, newDate: string) => void;
  id: number;
  title: string;
  description: string;
  type: string;
  dueDate: string;
};

const Card = ({
  onDelete = mock,
  onChangeDueDate = mock,
  title = "",
  description = "",
  type = CARD_TYPE.DEFAULT,
  dueDate = new Date().toDateString(),
  id,
}: CardProps) => {
  const cardStyle = CARD_STYLE[type];

  const tasks = useSelector(selectTasks);

  const [dueDateApproaching, setDueDateApproaching] = useState<boolean>(false);

  useEffect(() => {
    const updatedTask = tasks.find((task) => task.id === id);
    if (updatedTask) {
      const approachingThreshold = 24 * 60 * 60 * 1000;
      const timeDifference =
        new Date(updatedTask.dueDate).getTime() -
        new Date(updatedTask.createdAt).getTime();
      const isApproaching = timeDifference <= approachingThreshold;
      setDueDateApproaching(isApproaching);
    }
  }, [tasks]);

  const titleClass =
    type === "PRIMARY"
      ? "font-bold text-text-primary"
      : "font-bold text-text-default";

  const borderColor =
    type === "PRIMARY"
      ? "border-border-primaryBorder"
      : "border-border-defaultBorder";

  return (
    <div className={cardStyle}>
      <div className="min-h-[190px]">
        <h2 className={titleClass}>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <DatePicker
          fill={dueDateApproaching}
          date={dueDate}
          onChange={(date) => onChangeDueDate(id, date)}
        />
      </div>
      <div
        className={`flex cards-center justify-end h-[50px] border-dashed border-t-2 ${borderColor}`}
      >
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
};

export default Card;
