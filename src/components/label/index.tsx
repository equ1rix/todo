import React from "react";

type LableProps = {
  label: string;
};

const Label = ({ label = "" }: LableProps) => (
  <label className="text-text-light">{label}</label>
);

export default Label;
