import React from "react";

import Button from "../Button";
import { mock } from "../../Helpers";

type HeaderProps = {
  onAdd: () => void;
};

const Header = ({ onAdd = mock }: HeaderProps) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("eng", { month: "short" });
  const day = currentDate.getDate();

  return (
    <div className="flex relative justify-between items-center w-[100%] min-h-[80px] bg-modalBG">
      <div className="text-text-light py-2 px-4 m-auto">
        {`${year}, ${month} ${day}`}
      </div>
      <div className="absolute right-[30px] top-[20px]">
        <Button onClick={onAdd} text={"Add new Task"} />
      </div>
    </div>
  );
};

export default Header;
