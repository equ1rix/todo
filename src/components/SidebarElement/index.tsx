import React from "react";

import { mock } from "../../Helpers";

type ElementProps = {
  onClick: () => void;
  text: string;
  style: string;
};

const SidebarElement = ({
  style = "bg-defaultBG p-[6px] text-text-light text-left mb-[5px]",
  text = "",
  onClick = mock,
}: ElementProps) => {
  return (
    <li className={style} onClick={onClick}>
      {text}
    </li>
  );
};

export default SidebarElement;
