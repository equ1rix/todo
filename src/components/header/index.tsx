import { useContext } from "react";

import { getFormattedDate, mock } from "src/helpers";
import { ModalContext, ModalContextProps } from "src/context/ModalTaskContext";

import Button from "src/components/button";
import Input from "src/components/input";

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
    <div className="flex relative justify-between items-center w-[100%] min-h-[80px] p-[5px] bg-modalBG">
      <div className="absolute left-[20px]">
        <Input
          placeholder="Search task"
          value={value}
          onChange={handleSearch}
        />
      </div>
      <div className="text-text-light py-2 px-4 m-auto">{date}</div>
      <div className="absolute right-[20px] top-[20px]">
        <Button onClick={openModal} text={"Add new Task"} />
      </div>
    </div>
  );
};

export default Header;
