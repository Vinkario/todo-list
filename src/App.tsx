import React, { useState } from "react";
import { Checkbox } from "./components/Checkbox";
import { Text } from "./components/Text";

export const App = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleClick = () => {
    setChecked(!checked);
  };

  return (
    <div className="App">
      <h1>To do list</h1>

      <Checkbox isChecked={checked} onClick={toggleClick} />
      <Text title="Fazer cafe" isChecked={checked} onClick={toggleClick} />
    </div>
  );
};
