import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalTaskDetails from "../components/ModalTaskDetails";
import { Task } from "../redux/Task/TaskReducer";
import { defaultTasks } from "../Helpers/mock";
import { useSelector } from "react-redux";
import { selectTasks } from "../redux/Task/TaskSelector";

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
