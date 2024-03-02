import { useContext, useEffect, useState } from "react";

import { ModalContext, ModalContextProps } from "../../context/index";
import { mock } from "../../Helpers";

import { Task } from "../../redux/Task/TaskReducer";
import { useSelector } from "react-redux";
import {
  favoriteTasksSelector,
  selectTasks,
  todaysTasksSelector,
  weekTasksSelector,
} from "../../redux/Task/TaskSelector";

import Button from "../Button";
import SidebarElement from "../SidebarElement";

type SidebarProps = {
  onFilterClick: (filter: Element) => void;
};

export interface Element {
  text: string;
  isActive: boolean;
  id: number;
  select: Task[];
}

const Sidebar = ({ onFilterClick = mock }: SidebarProps) => {
  const elements: Element[] = [
    {
      id: 0,
      text: "Today's tasks",
      isActive: true,
      select: useSelector(todaysTasksSelector),
    },
    {
      id: 1,
      text: "This week tasks",
      isActive: false,
      select: useSelector(weekTasksSelector),
    },
    {
      id: 2,
      text: "All tasks",
      isActive: false,
      select: useSelector(selectTasks),
    },
    {
      id: 3,
      text: "Favorite tasks",
      isActive: false,
      select: useSelector(favoriteTasksSelector),
    },
  ];

  const [activeElement, setActiveElement] = useState<number>(elements[0].id);

  const onElementClickHandler = (id: number) => {
    setActiveElement(id);
  };

  useEffect(() => {
    onFilterClick(elements[activeElement]);
  }, [activeElement, elements]);

  const { openModal } = useContext(ModalContext) as ModalContextProps;

  return (
    <div className="flex flex-col bg-defaultBG h-[100%] min-w-[200px] w-[100%]">
      <h3 className="text-center text-text-light font-bold py-7 px-4 text-xl">
        TO-DO LIST
      </h3>
      <Button onClick={openModal} text="Add new Task" />
      <ul className="mt-[40px]">
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
