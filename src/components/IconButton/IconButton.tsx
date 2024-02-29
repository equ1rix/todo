import React, { ReactNode } from "react";

type IconButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const IconButton = ({ onClick, children }: IconButtonProps) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default IconButton;
