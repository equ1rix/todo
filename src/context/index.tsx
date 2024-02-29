import { ReactNode, createContext, useState } from "react";

import ModalTask from "../components/ModalTask";

export type ModalContextProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

type ModalContextProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalContextProvider = ({
  children,
}: ModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const contextValue: ModalContextProps = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {isOpen && <ModalTask onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

export { ModalContext };
