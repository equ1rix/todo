import React from "react";

import { ListIcon } from "./Icons";
import { mock } from "../../Helpers";

import IconButton from "./IconButton";

type ButtonProps = {
  onClick: () => void;
};

const ListButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <ListIcon />
  </IconButton>
);

export default ListButton;
