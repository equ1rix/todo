import React from "react";

import { mock } from "../../Helpers";

import { DeleteButton, FavoriteButton } from "../IconButton";
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
  onChangeDueDate: (id: number, newDate: string) => void;
  id: number;
  title: string;
  description: string;
  type: string;
  dueDate: string;
  createdAt: string;
  isOutdated: boolean;
  onSetFavorite: () => void;
  isFavorite?: boolean;
};

const Card = ({
  onDelete = mock,
  onSetFavorite = mock,
  onChangeDueDate = mock,
  title = "",
  description = "",
  type = CARD_TYPE.DEFAULT,
  isFavorite = false,
  dueDate = new Date().toDateString(),
  id,
  isOutdated = false,
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

  return (
    <div className={cardStyle}>
      <div className="min-h-[190px]">
        <h2 className={titleClass}>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <DatePicker
          fill={isOutdated ? "text-text-approaching" : "text-text-defaultTitle"}
          date={dueDate}
          onChange={(date) => onChangeDueDate(id, date)}
        />
      </div>
      <div
        className={`flex cards-center justify-end h-[50px] border-dashed border-t-2 ${borderColor}`}
      >
        <FavoriteButton
          onClick={onSetFavorite}
          fill={isFavorite ? "#f43f5e" : "#ffffff"}
        />
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
};

export default Card;
