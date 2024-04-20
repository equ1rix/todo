import React from "react";

import { mock } from "@helpers";

import { BlockListIcon } from "./icons";
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
