import React from "react";
import Label from "../Label";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const onChangeHandler = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center mt-3 mb-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChangeHandler}
        className="h-5 w-5 rounded-full mr-3 "
      />
      {label && <Label label={label} />}
    </div>
  );
};

export default Checkbox;
