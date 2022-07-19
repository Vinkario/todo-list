import React from "react";
import * as BS from "react-icons/bs";

import "./style.css";

type TextProps = {
  title: string;
  isChecked: boolean;
  onClick: () => void;
};

export const Text = ({ isChecked, title, onClick }: TextProps) => {
  return (
    <span
      onClick={onClick}
      className={
        isChecked ? "text-wrapper--checked" : "text-wrapper--no-checked"
      }
    >
      {title}
    </span>
  );
};
