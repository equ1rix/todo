import React from "react";

import { mock } from "@helpers";

import { ListIcon } from "./icons";
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
