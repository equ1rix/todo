import { useContext } from "react";

import { ModalContext, ModalContextProps } from "../../context/index";
import { mock, filters, Filter } from "../../Helpers";

import Button from "../Button";
import SidebarElement from "../SidebarElement";

type SidebarProps = {
  onFilterClick: (filter: Filter) => void;
  activeFilter: Filter;
};

const Sidebar = ({
  onFilterClick = mock,
  activeFilter = filters[0],
}: SidebarProps) => {
  const onFilterClickHandler = (filter: Filter) => {
    onFilterClick(filter);
  };

  const { openModal } = useContext(ModalContext) as ModalContextProps;

  return (
    <div className="flex flex-col bg-defaultBG h-[100%] min-w-[200px] w-[100%]">
      <h3 className="text-center text-text-light font-bold py-7 px-4 text-xl">
        TO-DO LIST
      </h3>
      <Button onClick={openModal} text="Add new Task" />
      <ul className="mt-[40px]">
        {filters.map((filter: Filter) => (
          <SidebarElement
            key={filter.id}
            text={filter.text}
            onClick={() => {
              onFilterClickHandler(filter);
            }}
            isActive={filter.id === activeFilter.id}
          />
        ))}
        ;
      </ul>
    </div>
  );
};

export default Sidebar;
