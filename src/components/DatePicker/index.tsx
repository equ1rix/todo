import React from "react";

import { mock } from "../../Helpers";

import Label from "../Label";

type DatePickerProps = {
  date: Date;
  onChange: (date: string) => void;
  label?: string;
};

const DatePicker = ({ date, onChange = mock, label = "" }: DatePickerProps) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value).toISOString();
    onChange(newDate);
  };

  return (
    <div className="mt-3 mb-3">
      {label && <Label label={label} />}
      <input
        className="bg-inputBG text-text-defaultTitle p-2 placeholder-text-defaultTitle rounded-lg w-[100%] min-h-[40px]"
        type="date"
        value={date.toISOString().split("T")[0]}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
