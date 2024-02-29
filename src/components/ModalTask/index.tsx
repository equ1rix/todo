import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../../redux/Task/TaskActions";

import Modal from "../Modal";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { ModalContext, ModalContextProps } from "../../context";

const ModalTask = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const dispatch = useDispatch();

  const { closeModal } = useContext(ModalContext) as ModalContextProps;

  const onTitleChange = (value: string) => {
    setTitle(value);
  };

  const onDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const onAddHandler = () => {
    dispatch(addTask({ title, description }));
    closeModal();
  };

  return (
    <Modal onClose={closeModal} title="Add a task">
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
