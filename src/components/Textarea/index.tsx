import React from "react";

import Lable from "../Label";

type TextareaProps = {
  placeholder: string;
  label: string;
};

const Textarea = ({ placeholder = "", label = "" }: TextareaProps) => (
  <div className="mt-3 mb-3">
    <Lable label={label} />
    <textarea
      placeholder={placeholder}
      className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[70px]"
    ></textarea>
  </div>
);

export default Textarea;
