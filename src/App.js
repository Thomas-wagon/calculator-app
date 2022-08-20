import React, { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Pad from "./components/Pad";

const App = () => {
  // variables
  const [theme, setTheme] = useState(0);
  const [input, setInput] = useState({ sign: "", num: 0, res: 0 });

  // functions
  function changeTheme(value) {
    // console.log(value);
    setTheme(value);
  }

  function handleInput(value) {
    !isNaN(value)
      ? handleNumButton(value)
      : value === "RESET"
      ? handleResetButton()
      : value === "+" || "-" || "x" || "/"
      ? handleOperatorButton(value)
      : handleResetButton();
    // console.log(value);
  }

  function handleNumButton(value) {
    setInput({ ...input, res: value });
    console.log(input);
  }

  function handleOperatorButton(value) {
    setInput({ ...input, sign: value });
  }

  function handleResetButton() {
    setInput({ ...input, sign: "", num: 0, res: 0 });
  }

  return (
    <div className={`container t${theme}`}>
      <div className="calculator">
        <Header changeThemeFct={changeTheme} />
        <Screen input={input} />
        <Pad communicateToApp={handleInput} />
      </div>
    </div>
  );
};

export default App;
