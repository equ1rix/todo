import React, { ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

const IconButton = ({ onClick, children }: ButtonProps) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default IconButton;
