import { useContext } from "react";

import { ModalContext, ModalContextProps } from "context/ModalTaskContext";
import { mock, filters, Filter } from "helpers";

import Button from "components/button";
import SidebarElement from "components/sidebarElement";

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
    <div className="flex flex-col bg-defaultBG h-[100%] min-w-[200px] w-[100%] ">
      <div className="flex flex-col min-w-[200px] w-[100%] px-4">
        <h3 className="text-center text-text-light font-bold py-7 px-4 text-xl">
          TO-DO LIST
        </h3>
        <Button onClick={openModal} text="Add new Task" />
      </div>
      <ul className="mt-[40px] w-full">
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
