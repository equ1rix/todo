import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { mock } from "../../Helpers";
import { addTodo } from "../../Redux/actions";

import Modal from "../Modal";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";

type ModalProps = {
  onClose: () => void;
  valueTitle?: string;
  valueDescription?: string;
};

const ModalTask = ({ onClose = mock }: ModalProps) => {
  const [valueTitle, setValueTitle] = useState<string>("");
  const [valueDescription, setValueDescription] = useState<string>("");

  const dispatch = useDispatch();

  const onTitleChange = (value: string) => {
    setValueTitle(value);
  };

  const onDescriptionChange = (value: string) => {
    setValueDescription(value);
  };

  const onAddHandler = () => {
    dispatch(addTodo(valueTitle, valueDescription));
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Add a task">
      <Input
        onChange={onTitleChange}
        label="Title"
        placeholder="e.g., study for the test"
      />
      <Textarea
        onChange={onDescriptionChange}
        label="Description (optional)"
        placeholder="e.g., study for the test"
      />
      <Button text="Add a task" onClick={onAddHandler} />
    </Modal>
  );
};

export default ModalTask;
