import React from "react";

import { getFormattedDate, mock } from "../../Helpers";

import Button from "../Button";

type HeaderProps = {
  onAdd: () => void;
  date: string;
};

const Header = ({ onAdd = mock, date = getFormattedDate() }: HeaderProps) => {
  return (
    <div className="flex relative justify-between items-center w-[100%] min-h-[80px] p-[5px] bg-modalBG">
      <div className="text-text-light py-2 px-4 m-auto">{date}</div>
      <div className="absolute right-[20px] top-[20px]">
        <Button onClick={onAdd} text={"Add new Task"} />
      </div>
    </div>
  );
};

export default Header;
