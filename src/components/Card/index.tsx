import React from "react";

import { DeleteButton, FavoriteButton } from "../IconButton";
import { mock } from "../../Helpers";

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
  onSetFavorite: () => void;
  title?: string;
  text?: string;
  type?: CardType;
  isFavorite?: boolean;
};

const Card = ({
  onDelete = mock,
  onSetFavorite = mock,
  title = "",
  text = "",
  type = CARD_TYPE.DEFAULT,
  isFavorite = false,
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
        <p>{text}</p>
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
