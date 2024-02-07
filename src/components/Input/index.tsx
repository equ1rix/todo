import React, { useState } from "react";

import { mock } from "../../Helpers";

import Label from "../Label";

type InputProps = {
  placeholder: string;
  label: string;
  onChange: (value: string) => void;
};

const Input = ({
  placeholder = "",
  label = "",
  onChange = mock,
}: InputProps) => {
  const [valueTitle, setValueTitle] = useState<string>("");

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTitle(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="mt-3 mb-3">
      {label && <Label label={label} />}
      <input
        value={valueTitle}
        onChange={onTitleChange}
        placeholder={placeholder}
        className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[40px]"
      ></input>
    </div>
  );
};

export default Input;
