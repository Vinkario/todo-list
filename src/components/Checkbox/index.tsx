import React from "react";
import * as BS from "react-icons/bs";

import "./style.css";

type CheckboxProps = {
  isChecked: boolean;
  onClick: () => void;
};

export const Checkbox = ({ isChecked, onClick }: CheckboxProps) => {
  return (
    <div
      onClick={onClick}
      className={
        isChecked ? "checkbox-wrapper--checked" : "checkbox-wrapper--no-checked"
      }
      
    >
      {isChecked && <BS.BsCheckLg />}
    </div>
  );
};
