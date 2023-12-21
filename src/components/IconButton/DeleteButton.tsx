import React from "react";

import IconButton from "./IconButton";
import { DeleteIcon } from "./Icons";
import mock from "../Helpers";

type ButtonProps = {
  mock: () => void;
};

const DeleteButton = ({ mock }: ButtonProps) => (
  <IconButton onClick={mock}>
    <DeleteIcon />
  </IconButton>
);

export default DeleteButton;
