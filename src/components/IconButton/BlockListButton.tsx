import React from "react";

import { BlockListIcon } from "./Icons";
import { mock } from "../../Helpers";

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
