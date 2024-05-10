import React from "react";

import { mock } from "src/helpers";

import { CloseIcon } from "./icons";
import IconButton from "./IconButton";

type ButtonProps = {
  onClick: () => void;
};

const CloseButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <CloseIcon />
  </IconButton>
);

export default CloseButton;
