import React from "react";

import { mock } from "@helpers";

import { FavoriteIcon } from "./icons";
import IconButton from "./IconButton";

type ButtonProps = {
  onClick: () => void;
  fill: string;
};

const FavoriteButton = ({ onClick = mock, fill }: ButtonProps) => {
  return (
    <IconButton onClick={onClick}>
      <FavoriteIcon fill={fill} />
    </IconButton>
  );
};

export default FavoriteButton;
