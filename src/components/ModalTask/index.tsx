import React from "react";

import Modal from "../Modal";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { mock } from "../../Helpers";

type ModalProps = {
  onClose: () => void;
  valueTitle: string;
  valueDescription: string;
  onTitleChange: () => void;
  onDescriptonChange: () => void;
  onAdd: (title: string, description: string) => void;
};

const ModalTask = ({
  onClose = mock,
  valueTitle = "",
  valueDescription = "",
  onTitleChange,
  onDescriptonChange,
  onAdd = mock,
}: ModalProps) => {
  const onAddHandler = () => {
    onAdd(valueTitle, valueDescription);
  };

  return (
    <Modal onClose={onClose} title="Add a task">
      <Input
        value={valueTitle}
        onChange={onTitleChange}
        label="Title"
        placeholder="e.g., study for the test"
      />
      <Textarea
        value={valueDescription}
        onChange={onDescriptonChange}
        label="Description (optional)"
        placeholder="e.g., study for the test"
      />
      <Button text="Add a task" onClick={onAddHandler} />
    </Modal>
  );
};

export default ModalTask;
