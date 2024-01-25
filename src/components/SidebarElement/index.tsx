import React from "react";

import { mock } from "../../Helpers";

type ElementProps = {
  onClick: () => void;
  text: string;
  isActive: boolean;
};

const SidebarElement = ({
  isActive,
  text = "",
  onClick = mock,
}: ElementProps) => {
  const elementStyle = isActive
    ? "bg-activeBG p-[6px] text-white text-left border-solid border-r-4 border-white mb-[5px]"
    : "bg-defaultBG p-[6px] text-text-light text-left mb-[5px]";

  return (
    <li className={elementStyle} onClick={onClick}>
      {text}
    </li>
  );
};

export default SidebarElement;
