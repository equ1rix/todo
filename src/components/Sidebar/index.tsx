import React, { useState } from "react";

import Button from "../Button";
import { mock } from "../../Helpers";
import SidebarElement from "../SidebarElement";

const Sidebar = () => {
  const elements = [
    {
      text: "Today's tasks",
      isActive: true,
      id: 0,
    },
    {
      text: "All tasks",
      isActive: false,
      id: 1,
    },
  ];
  const [activeElement, setActiveElement] = useState(0);
  const elementHandler = (id: number) => setActiveElement(id);
  return (
    <div className="flex flex-col bg-defaultBG h-[100%] min-w-[200px] w-[100%]">
      <h3 className="text-center text-text-light font-bold py-2 px-4 text-xl">
        TO-DO LIST
      </h3>
      <Button onClick={() => {}} text="Add new Task" />
      <ul className="mt-[30px]">
        {elements.map((element) => {
          return (
            <SidebarElement
              text={element.text}
              onClick={() => {
                elementHandler(element.id);
              }}
              style={
                element.id === activeElement
                  ? "bg-activeBG p-[6px] text-white text-left border-solid border-r-4 border-white mb-[5px]"
                  : "bg-defaultBG p-[6px] text-text-light text-left mb-[5px]"
              }
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
