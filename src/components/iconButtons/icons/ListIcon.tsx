import React from "react";

const ListIcon = ({ height = "30", width = "30", fill = "#FFFFFF" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    style={{ fill }}
  >
    <path d="M 6 9 A 2.0002 2.0002 0 1 0 6 13 L 42 13 A 2.0002 2.0002 0 1 0 42 9 L 6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26 L 42 26 A 2.0002 2.0002 0 1 0 42 22 L 6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39 L 42 39 A 2.0002 2.0002 0 1 0 42 35 L 6 35 z"></path>
  </svg>
);

export default ListIcon;
