import React from "react";

import Modal from "../Modal";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";
import { mock } from "../Helpers";

const ModalTask = ({ onClick = mock, onChange = mock }) => (
  <Modal onClose={onClick} title="Add a task">
    <Input
      onChange={onChange}
      label="Title"
      placeholder="e.g, study for the test"
    />
    <Textarea
      label="Description (optional)"
      placeholder="e.g, study for the test"
    />
    <Button type="MODAL" text="Add a task" onClick={onClick} />
  </Modal>
);

export default ModalTask;
