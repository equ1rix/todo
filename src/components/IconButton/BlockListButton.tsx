import React from "react";

import IconButton from "./IconButton";
import { BlockListIcon } from "./Icons";
import { mock } from "../../Helpers";

type ButtonProps = {
  onClick: () => void;
};
const BlockListButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <BlockListIcon />
  </IconButton>
);

export default BlockListButton;
