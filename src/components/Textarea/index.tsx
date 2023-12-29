import React from "react";

import Lable from "../Lable";

type TextareaProps = {
  placeholder: string;
};

const Textarea = ({ placeholder = "" }: TextareaProps) => (
  <div className="mt-3 mb-3">
    <Lable title="Description (optional)" />
    <textarea
      placeholder={placeholder}
      className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[70px]"
    ></textarea>
  </div>
);

export default Textarea;
