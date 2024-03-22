import React from "react";

import { BlockListIcon } from "./icons";
import { mock } from "helpers";

import IconButton from "./IconButton";

type ButtonProps = {
  onClick: () => void;
};
const BlockListButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <BlockListIcon />
  </IconButton>
);

export default BlockListButton;
