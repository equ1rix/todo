import React, { ReactNode } from "react";

import { CloseButton } from "../IconButton";
import { mock } from "../Helpers";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
  title: string;
};

const Modal = ({ onClose = mock, children, title = "" }: ModalProps) => (
  <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center bg-opacity-50 z-50">
    <div className="w-[500px] min-h-[230px] bg-modalBG p-[15px] rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-white fz font-bold text-2xl">{title}</h1>
        <CloseButton onClick={onClose} />
      </div>
      {children}
    </div>
  </div>
);

export default Modal;
