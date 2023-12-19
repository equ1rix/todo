import React from "react";

import IconButton from "./IconButton";
import { DeleteIcon as DeleteIcon123 } from "./Icons";

type ButtonProps = {
  onClick?: () => void;
};

const DeleteButton = ({ onClick }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <DeleteIcon123 />
  </IconButton>
);

export default DeleteButton;
