import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "src/redux/Task/TaskActions";

import Modal from "src/components/modal";
import Input from "src/components/input";
import Textarea from "src/components/textarea";
import Button from "src/components/button";
import Checkbox from "src/components/checkBox";
import DatePicker from "src/components/datePicker";

type ModalTaskProps = {
  onClose: () => void;
};

const ModalTask = ({ onClose }: ModalTaskProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [dueDate, setDueDate] = useState<string>(() => {
    const nextDayDate = new Date();
    nextDayDate.setDate(nextDayDate.getDate() + 1);
    nextDayDate.setUTCHours(0, 0, 0, 0);
    return nextDayDate.toISOString();
  });

  const dispatch = useDispatch();

  const onTitleChange = (value: string) => {
    setTitle(value);
  };

  const onDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const onAddHandler = () => {
    dispatch(
      addTask({
        title,
        description,
        createdAt: new Date().toISOString(),
        dueDate: dueDate,
        isFavorite,
      })
    );
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
      <DatePicker date={dueDate} onChange={setDueDate} label="Date" />
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
