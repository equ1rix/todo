import React, { useContext, useState } from "react";

import Button from "../Button";
import SidebarElement from "../SidebarElement";
import { ModalContext, ModalContextProps } from "../../context/index";

type Element = {
  text: string;
  isActive: boolean;
  id: number;
};

const elements: Element[] = [
  {
    id: 0,
    text: "Today's tasks",
    isActive: true,
  },
  {
    id: 1,
    text: "All tasks",
    isActive: false,
  },
];

const Sidebar = () => {
  const [activeElement, setActiveElement] = useState<number>(elements[0].id);

  const onElementClickHandler = (id: number) => setActiveElement(id);

  const { openModal } = useContext(ModalContext) as ModalContextProps;

  return (
    <div className="flex flex-col bg-defaultBG h-[100%] min-w-[200px] w-[100%]">
      <h3 className="text-center text-text-light font-bold py-2 px-4 text-xl">
        TO-DO LIST
      </h3>
      <Button onClick={openModal} text="Add new Task" />
      <ul className="mt-[30px]">
        {elements.map((element: Element) => (
          <SidebarElement
            key={element.id}
            text={element.text}
            onClick={() => {
              onElementClickHandler(element.id);
            }}
            isActive={element.id === activeElement}
          />
        ))}
        ;
      </ul>
    </div>
  );
};

export default Sidebar;
