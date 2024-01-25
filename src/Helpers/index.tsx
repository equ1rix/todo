import React from "react";

export const mock = () => {};

export const getFormattedDate = (date = new Date()) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.toLocaleString("en", { month: "short" });
  const day = currentDate.getDate();
  return `${year}, ${month} ${day}`;
};
