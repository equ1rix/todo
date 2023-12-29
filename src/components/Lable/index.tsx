import React from "react";

type LableProps = {
  title: string;
};

const Lable = ({ title = "" }: LableProps) => (
  <h2 className="text-text-light">{title}</h2>
);

export default Lable;
