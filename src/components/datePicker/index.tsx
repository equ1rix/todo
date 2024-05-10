import React from "react";

import { mock } from "helpers";

import Label from "components/label";

type DatePickerProps = {
  date: string;
  onChange: (date: string) => void;
  label?: string;
  fill?: string;
};

const DatePicker = ({
  date = new Date().toISOString(),
  onChange = mock,
  label = "",
  fill = "text-text-defaultTitle",
}: DatePickerProps) => {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    newDate.setUTCHours(0, 0, 0);
    onChange(newDate.toISOString());
  };

  return (
    <div className="mt-3 mb-3">
      {label && <Label label={label} />}
      <input
        className={`${fill} bg-inputBG p-2 rounded-lg w-[100%] min-h-[40px]`}
        type="date"
        value={date.split("T")[0]}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePicker;
