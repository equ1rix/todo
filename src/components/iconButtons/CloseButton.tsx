import React from "react";

import { CloseIcon } from "./icons";
import { mock } from "helpers";
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
