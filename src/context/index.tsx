import { createContext, ReactNode, useState } from "react";

export type ModalContextProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

type ModalContextProviderProps = {
  children: ReactNode;
  defaultValue?: ModalContextProps;
};

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
    </ModalContext.Provider>
  );
};

export { ModalContext };
