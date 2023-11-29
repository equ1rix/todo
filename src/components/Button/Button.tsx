import React from "react";

export const BUTTON_TYPE = {
  PRIMARY: 'PRIMARY',
  LIGHT: 'LIGHT'
};

type ButtonType = typeof BUTTON_TYPE[keyof typeof BUTTON_TYPE];

const BUTTON_STYLE: Record<ButtonType, string> = {
  PRIMARY: "bg-primaryButtonBG rounded-lg text-primaryTextColor font-bold py-2 px-4",
  LIGHT: "bg-lightButtonBG rounded-lg text-lightTextColor border border-dashed border-2 font-bold py-2 px-4"
};

type ButtonProps = {
  onClick?: () => void;
  text?: string;
  type?: ButtonType;
};

export default function Button({ onClick, text, type = BUTTON_TYPE.PRIMARY }: ButtonProps) {
  const buttonStyle = BUTTON_STYLE[type];
  return (
    <button className={buttonStyle} type='button' onClick={() => onClick?.()}>{text}</button>
  );
}




