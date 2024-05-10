import { ReactNode, createContext, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { defaultTasks } from "src/helpers/mock";
import { Task } from "src/redux/Task/TaskReducer";
import { selectTasks } from "src/redux/Task/TaskSelector";

import ModalTaskDetails from "src/components/modalTaskDetails";

export type ModalDetailsContextProps = {
  isOpenModalDetails: boolean;
  openModalDetails: (taskId: string) => void;
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
  const navigate = useNavigate();
  const tasks = useSelector(selectTasks);

  const openModalDetails = (taskId: string) => {
    setIsOpenModalDetails(true);
    navigate(`/homepage?taskId=${taskId}`);
    const task = tasks.find((task) => task.id === taskId);
    if (task) {
      setTaskDetails(task);
    }
  };

  const closeModalDetails = () => {
    navigate(`/homepage`);
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
