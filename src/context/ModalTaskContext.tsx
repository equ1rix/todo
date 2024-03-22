import { ReactNode, createContext, useState } from "react";

import ModalTask from "components/modalTask";

export type ModalContextProps = {
  isOpenModal: boolean;
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
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const contextValue: ModalContextProps = {
    isOpenModal,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {isOpenModal && <ModalTask onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

export { ModalContext };
