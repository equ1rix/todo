import React from "react";

import Button from "../Button";
import { mock } from "../../Helpers";

type HeaderProps = {
  year: number;
  month: string;
  day: number;
  onAdd: () => void;
};

const Header = ({ year, month, day, onAdd = mock }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center w-[100%] min-h-[80px] bg-modalBG">
      <div className="text-text-light py-2 px-4 ml-[50%]">
        <div className="ml-[-62.5px]">{`${year}, ${month} ${day}`}</div>
      </div>
      <div className="mr-[30px] h-[50px]">
        <Button onClick={onAdd} text={"Add new Task"} />
      </div>
    </div>
  );
};

export default Header;
