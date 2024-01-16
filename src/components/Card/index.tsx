import React from "react";

import { DeleteButton } from "../IconButton";
import { mock } from "../../Helpers";

export const CARD_TYPE = {
  PRIMARY: "PRIMARY",
  DEFAULT: "DEFAULT",
};

type CardType = (typeof CARD_TYPE)[keyof typeof CARD_TYPE];

const CARD_STYLE: Record<CardType, string> = {
  PRIMARY:
    "flex flex-col bg-primaryBG rounded-lg text-text-primary min-h-[250px] py-2 px-4",
  DEFAULT:
    "flex flex-col bg-defaultBG rounded-lg text-text-default min-h-[250px] py-2 px-4",
};

type CardProps = {
  onDelete: () => void;
  title?: string;
  text?: string;
  type?: CardType;
};

const Card = ({
  onDelete = mock,
  title = "",
  text = "",
  type = CARD_TYPE.PRIMARY,
}: CardProps) => {
  const cardStyle = CARD_STYLE[type];
  const titleClass =
    type === "PRIMARY"
      ? "font-bold text-text-primary"
      : "font-bold text-text-default";
  return (
    <div className={cardStyle}>
      <div className="min-h-[190px]">
        <h2 className={titleClass}>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="flex cards-center justify-end h-[50px] border-dashed border-t-2 border-border-primaryBorder">
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
};

export default Card;
