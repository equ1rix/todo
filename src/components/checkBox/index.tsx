import React from "react";

import Label from "@components/label";

type CheckboxProps = {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
};

const Checkbox = ({ label, onChange, value }: CheckboxProps) => (
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

export default Checkbox;
