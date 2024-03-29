import { useContext } from "react";

import { getFormattedDate, mock } from "helpers";

import Button from "components/button";
import { ModalContext, ModalContextProps } from "context/ModalTaskContext";
import Input from "components/input";

type HeaderProps = {
  date?: string;
  value: string;
  onChange: (search: string) => void;
};

const Header = ({
  date = getFormattedDate(),
  value = "",
  onChange = mock,
}: HeaderProps) => {
  const { openModal } = useContext(ModalContext) as ModalContextProps;

  const handleSearch = (search: string) => {
    onChange(search);
  };

  return (
    <div className="flex relative justify-between items-center w-[100%] min-h-[80px] min-w-[260px] p-[5px] bg-modalBG">
      <div className="absolute left-[20px]">
        <Input
          placeholder="Search task"
          value={value}
          onChange={handleSearch}
        />
      </div>
      <div className="text-text-light py-2 px-4 m-auto">{date}</div>
      <div className="absolute right-[20px]">
        <Button onClick={openModal} text={"Add new Task"} />
      </div>
    </div>
  );
};

export default Header;
