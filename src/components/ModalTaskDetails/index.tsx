import { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { mock } from "../../Helpers";

import { updateTaskDetails } from "../../redux/Task/TaskActions";
import {
  ModalDetailsContext,
  ModalDetailsContextProps,
} from "../../context/ModalTaskDetailsContext";
import Modal from "../Modal";
import Label from "../Label";
import Input from "../Input";
import Textarea from "../Textarea";
import DatePicker from "../DatePicker";
import Checkbox from "../CheckBox";
import Button from "../Button";

type ModalTaskDetailsProps = {
  onClose: () => void;
};

const ModalTaskDetails = ({ onClose = mock }: ModalTaskDetailsProps) => {
  const { taskDetails } = useContext(
    ModalDetailsContext
  ) as ModalDetailsContextProps;

  const [title, setTitle] = useState<string>(taskDetails.title);
  const [description, setDescription] = useState<string>(
    taskDetails.description
  );
  const [isFavorite, setIsFavorite] = useState<boolean>(taskDetails.isFavorite);
  const [dueDate, setDueDate] = useState<string>(taskDetails.dueDate);

  const dispatch = useDispatch();

  const onTitleChange = (value: string) => {
    setTitle(value);
  };

  const onDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const onCheckboxChange = (checked: boolean) => {
    setIsFavorite(checked);
  };

  const onUpdate = () => {
    dispatch(
      updateTaskDetails({
        id: taskDetails.id,
        title,
        description,
        isFavorite,
        dueDate,
      })
    );
    onClose();
  };

  const createdAtDate = taskDetails.createdAt.split("T")[0];
  const createdAtTime = taskDetails.createdAt.split("T")[1].split(".")[0];

  return (
    <Modal onClose={onClose} title="Task details">
      <Input label="Title" value={title} onChange={onTitleChange} />
      <Textarea
        label="Description"
        value={description}
        onChange={onDescriptionChange}
      />
      <Label label="Due date" />
      <DatePicker date={dueDate} onChange={setDueDate} />
      <Checkbox
        value={isFavorite}
        onChange={onCheckboxChange}
        label="Mark as favorite"
      />
      <Label label="Created date and time" />
      <p className="font-bold text-text-default mb-4">
        {createdAtDate} {createdAtTime}
      </p>
      <Button text="Update task" onClick={onUpdate} />
    </Modal>
  );
};

export default ModalTaskDetails;
