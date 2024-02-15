import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { updateTaskDate } from "../../redux/Task/TaskActions";
import { mock } from "../../Helpers";

import { DeleteButton } from "../IconButton";
import DatePicker from "../DatePicker";

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
  title?: string;
  text?: string;
  type?: CardType;
  date: Date;
  taskId: number;
};

const Card = ({
  onDelete = mock,
  title = "",
  text = "",
  type = CARD_TYPE.DEFAULT,
  date,
  taskId,
}: CardProps) => {
  const [dueDate, setDueDate] = useState<Date>(date);

  const cardStyle = CARD_STYLE[type];
  const dispatch = useDispatch();

  const titleClass =
    type === "PRIMARY"
      ? "font-bold text-text-primary"
      : "font-bold text-text-default";

  const borderColor =
    type === "PRIMARY"
      ? "border-border-primaryBorder"
      : "border-border-defaultBorder";

  const onChange = (newDate: Date) => {
    setDueDate(newDate);
    dispatch(updateTaskDate(taskId, newDate));
  };

  return (
    <div className={cardStyle}>
      <div className="min-h-[190px]">
        <h2 className={titleClass}>{title}</h2>
        <p>{text}</p>
      </div>
      <div>
        <DatePicker date={dueDate} onChange={onChange} />
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
