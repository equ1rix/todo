import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { mock } from "../../Helpers";
import { addTodo } from "../../redux/Task/TaskActions";

import Modal from "../Modal";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import Checkbox from "../CheckBox";

type ModalProps = {
  onClose: () => void;
  title?: string;
  description?: string;
};

const ModalTask = ({ onClose = mock }: ModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onTitleChange = (value: string) => {
    setTitle(value);
  };

  const onDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const onAddHandler = () => {
    dispatch(addTodo({ title, description, isFavorite }));
    onClose();
  };

  const onCheckboxChange = (checked: boolean) => {
    setIsFavorite(checked);
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
      <Checkbox
        label="Mark as favorite"
        value={isFavorite}
        onChange={onCheckboxChange}
      />
      <Button text="Add a task" onClick={onAddHandler} />
    </Modal>
  );
};

export default ModalTask;
