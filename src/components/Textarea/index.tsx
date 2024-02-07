import React, { useState } from "react";

import { mock } from "../../Helpers";

import Label from "../Label";

type TextareaProps = {
  placeholder: string;
  label: string;
  onChange: (value: string) => void;
};

const Textarea = ({
  placeholder = "",
  label = "",
  onChange = mock,
}: TextareaProps) => {
  const [valueDescription, setValueDescription] = useState<string>("");

  const onDescripionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueDescription(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="mt-3 mb-3">
      {label && <Label label={label} />}
      <textarea
        value={valueDescription}
        onChange={onDescripionChange}
        placeholder={placeholder}
        className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[70px]"
      ></textarea>
    </div>
  );
};

export default Textarea;
