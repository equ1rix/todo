import React from "react";

import { mock } from "src/helpers";

import Label from "src/components/label";

type TextareaProps = {
  placeholder?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
};

const Textarea = ({
  placeholder = "",
  label = "",
  onChange = mock,
  value = "",
}: TextareaProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mt-3 mb-3">
      {label && <Label label={label} />}
      <textarea
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className="bg-inputBG text-text-defaultTitle p-2 rounded-lg w-[100%] min-h-[70px]"
      ></textarea>
    </div>
  );
};

export default Textarea;
