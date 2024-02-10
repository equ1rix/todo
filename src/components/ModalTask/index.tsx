import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { mock } from "../../Helpers";
import { addTodo } from "../../redux/Task/TaskActions";

import Modal from "../Modal";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";

type ModalProps = {
  onClose: () => void;
  title?: string;
  description?: string;
};

const ModalTask = ({ onClose = mock }: ModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useDispatch();

  const onTitleChange = (value: string) => {
    setTitle(value);
  };

  const onDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const onAddHandler = () => {
    dispatch(addTodo({ title, description }));
    onClose();
  };

  return (
    <Modal onClose={onClose} title="Add a task">
      <Input
        value={title}
        onChange={onTitleChange}
        label="Title"
        placeholder="e.g., study for the test"
      />
      <Textarea
        value={description}
        onChange={onDescriptionChange}
        label="Description (optional)"
        placeholder="e.g., study for the test"
      />
      <Button text="Add a task" onClick={onAddHandler} />
    </Modal>
  );
};

export default ModalTask;
