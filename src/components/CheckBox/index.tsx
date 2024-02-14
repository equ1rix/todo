import React, { ChangeEvent } from "react";
import Label from "../Label";

type CheckboxProps = {
  label: string;
  value: boolean;
  onChange: (isFavorite: boolean) => void;
};

const Checkbox = ({ label, onChange, value }: CheckboxProps) => {
  return (
    <div className="flex items-center mt-3 mb-4">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 rounded-full mr-3 "
      />
      {label && <Label label={label} />}
    </div>
  );
};

export default Checkbox;
