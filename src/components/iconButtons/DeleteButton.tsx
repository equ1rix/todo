import React from "react";

import IconButton from "./IconButton";
import { DeleteIcon } from "./icons";
import { mock } from "helpers";

type ButtonProps = {
  onClick: () => void;
};

const DeleteButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <DeleteIcon />
  </IconButton>
);

export default DeleteButton;
