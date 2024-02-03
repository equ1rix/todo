import React from "react";

import IconButton from "./IconButton";
import { ListIcon } from "./Icons";
import { mock } from "../../Helpers";

type ButtonProps = {
  onClick: () => void;
};

const ListButton = ({ onClick = mock }: ButtonProps) => (
  <IconButton onClick={onClick}>
    <ListIcon />
  </IconButton>
);

export default ListButton;
