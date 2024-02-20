import React, { useState } from "react";

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
  onChange: (id: number, newDate: Date) => void;
  id: number;
  title: string;
  description: string;
  type: string;
  dueDate: Date;
};

const Card = ({
  onDelete = mock,
  onChange = mock,
  title = "",
  description = "",
  type = CARD_TYPE.DEFAULT,
  dueDate = new Date(),
  id,
}: CardProps) => {
  const cardStyle = CARD_STYLE[type];

  const titleClass =
    type === "PRIMARY"
      ? "font-bold text-text-primary"
      : "font-bold text-text-default";

  const borderColor =
    type === "PRIMARY"
      ? "border-border-primaryBorder"
      : "border-border-defaultBorder";

  const handleDateChange = (id: number, date: Date) => {
    onChange(id, date);
  };
  return (
    <div className={cardStyle}>
      <div className="min-h-[190px]">
        <h2 className={titleClass}>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <DatePicker
          date={dueDate}
          onChange={(date) => handleDateChange(id, date)}
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
