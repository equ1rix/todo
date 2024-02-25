import React from "react";

import { mock } from "../../Helpers";

import Label from "../Label";

type DatePickerProps = {
  date: string;
  onChange: (date: string) => void;
  label?: string;
  fill?: boolean;
};

const DatePicker = ({
  date = new Date().toISOString(),
  onChange = mock,
  label = "",
  fill = false,
}: DatePickerProps) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    onChange(newDate);
  };

  const textColor = fill ? "text-text-approaching" : "text-text-defaultTitle";

  return (
    <div className="mt-3 mb-3">
      {label && <Label label={label} />}
      <input
        className={`${textColor} bg-inputBG p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[40px]`}
        type="date"
        value={date.split("T")[0]}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
