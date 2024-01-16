import React from "react";

import { CloseIcon } from "./Icons";
import { mock } from "../../Helpers";
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
