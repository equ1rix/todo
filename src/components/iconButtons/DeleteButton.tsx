import React from "react";

import { mock } from "src/helpers";

import { DeleteIcon } from "./icons";
import IconButton from "./IconButton";

type ButtonProps = {
  onClick: () => void;
};

const DeleteButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <DeleteIcon />
  </IconButton>
);

export default DeleteButton;
