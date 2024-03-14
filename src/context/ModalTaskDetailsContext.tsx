import { ReactNode, createContext, useState } from "react";

import ModalTaskDetails from "../components/ModalTaskDetails";
import { Task } from "../redux/Task/TaskReducer";
import { defaultTasks } from "../Helpers/mock";

export type ModalDetailsContextProps = {
  isOpenModalDetails: boolean;
  openModalDetails: (task: Task) => void;
  closeModalDetails: () => void;
  taskDetails: Task;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

const ModalDetailsContext = createContext<ModalDetailsContextProps | undefined>(
  undefined
);

export const ModalDetailsContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isOpenModalDetails, setIsOpenModalDetails] = useState<boolean>(false);
  const [taskDetails, setTaskDetails] = useState<Task>(defaultTasks[0]);

  const openModalDetails = (task: Task) => {
    setIsOpenModalDetails(true);
    setTaskDetails(task);
  };

  const closeModalDetails = () => {
    setIsOpenModalDetails(false);
  };

  const contextValue: ModalDetailsContextProps = {
    isOpenModalDetails,
    openModalDetails,
    closeModalDetails,
    taskDetails,
  };

  return (
    <ModalDetailsContext.Provider value={contextValue}>
      {children}
      {isOpenModalDetails && <ModalTaskDetails onClose={closeModalDetails} />}
    </ModalDetailsContext.Provider>
  );
};

export { ModalDetailsContext };
