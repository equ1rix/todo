import React from "react";

import Label from "../Label";

type TextareaProps = {
  placeholder: string;
  label: string;
  value: string;
  onChange: () => void;
};

const Textarea = ({
  placeholder = "",
  label = "",
  value,
  onChange,
}: TextareaProps) => (
  <div className="mt-3 mb-3">
    {label && <Label label={label} />}
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[70px]"
    ></textarea>
  </div>
);

export default Textarea;
