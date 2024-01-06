import React, { ReactNode } from "react";

import Label from "../Label";
import { mock } from "../Helpers";

type InputProps = {
  placeholder: string;
  label: string;
  onChange: () => void;
};

const Input = ({
  placeholder = "",
  label = "",
  onChange = mock,
}: InputProps) => (
  <div className="mt-3 mb-3">
    <Label label={label} />
    <input
      onChange={onChange}
      placeholder={placeholder}
      className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[40px]"
    ></input>
  </div>
);

export default Input;
