import React from "react";

import IconButton from "./IconButton";
import { FavoriteIcon } from "./Icons";
import { mock } from "../../Helpers";

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
