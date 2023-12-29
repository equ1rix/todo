import React from "react";

import Lable from "../Lable";

type InputProps = {
  placeholder: string;
};

const Input = ({ placeholder = "" }: InputProps) => (
  <div className="mt-3 mb-3">
    <Lable title="Title" />
    <input
      placeholder={placeholder}
      className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[40px]"
    ></input>
  </div>
);

export default Input;
