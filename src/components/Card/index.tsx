import React from "react";

import DeleteButton from "../IconButton/DeleteButton";

export const ITEM_TYPE = {
  PRIMARY: "PRIMARY",
  DEFAULT: "DEFAULT",
};

type ItemType = (typeof ITEM_TYPE)[keyof typeof ITEM_TYPE];

const ITEM_STYLE: Record<ItemType, string> = {
  PRIMARY:
    "flex flex-col bg-primaryBG rounded-lg text-text-primary min-h-[250px] py-2 px-4",
  DEFAULT:
    "flex flex-col bg-defaultBG rounded-lg text-text-default min-h-[250px] py-2 px-4",
};

type ItemProps = {
  onDelete?: () => void;
  title?: string;
  text?: string;
  type?: ItemType;
};

const Card = ({
  onDelete,
  title,
  text,
  type = ITEM_TYPE.PRIMARY,
}: ItemProps) => {
  const itemStyle = ITEM_STYLE[type];
  const titleClass =
    type === "PRIMARY"
      ? "font-bold text-text-primary"
      : "font-bold text-text-default";
  return (
    <div className={itemStyle}>
      <div className="min-h-[190px]">
        <h2 className={titleClass}>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="flex items-center justify-end h-[50px] border-dashed border-t-2 border-border-primaryBorder">
        <DeleteButton onClick={onDelete} />
      </div>
    </div>
  );
};

export default Card;
