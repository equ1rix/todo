import React from "react";

import { mock } from "src/helpers";

export const BUTTON_TYPE = {
  PRIMARY: "PRIMARY",
  LIGHT: "LIGHT",
  DISABLED: "DISABLED",
};

type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

const BUTTON_STYLE: Record<ButtonType, string> = {
  PRIMARY: "bg-primaryBG rounded-lg text-text-primary font-bold py-2 px-4 ",
  LIGHT:
    "rounded-lg text-text-light border border-dashed border-2 font-bold py-2 px-4 ",
  DISABLED: "bg-disabledBG rounded-lg text-text-disabled font-bold py-2 px-4 ",
};

type ButtonProps = {
  onClick: () => void;
  text?: string;
  type?: ButtonType;
  isDisabled?: boolean;
};

const Button = ({
  onClick = mock,
  text = "",
  type = BUTTON_TYPE.PRIMARY,
  isDisabled = false,
}: ButtonProps) => {
  const buttonStyle = isDisabled ? BUTTON_STYLE.DISABLED : BUTTON_STYLE[type];
  return (
    <button
      className={buttonStyle}
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
