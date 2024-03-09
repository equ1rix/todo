import { useContext } from "react";

import { getFormattedDate } from "../../Helpers";

import Button from "../Button";
import {
  ModalContext,
  ModalContextProps,
} from "../../context/ModalTaskContext";

type HeaderProps = {
  date?: string;
};

const Header = ({ date = getFormattedDate() }: HeaderProps) => {
  const { openModal } = useContext(ModalContext) as ModalContextProps;

  return (
    <div className="flex relative justify-between items-center w-[100%] min-h-[80px] p-[5px] bg-modalBG">
      <div className="text-text-light py-2 px-4 m-auto">{date}</div>
      <div className="absolute right-[20px] top-[20px]">
        <Button onClick={openModal} text={"Add new Task"} />
      </div>
    </div>
  );
};

export default Header;
