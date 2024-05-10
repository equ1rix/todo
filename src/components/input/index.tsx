import React from "react";

import { mock } from "src/helpers/index";

import Label from "src/components/label";

type InputProps = {
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  placeholder = "",
  label = "",
  onChange = mock,
  value = "",
}: InputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mt-3 mb-3">
      {label && <Label label={label} />}
      <input
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[40px]"
      ></input>
    </div>
  );
};

export default Input;
