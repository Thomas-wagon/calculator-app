import React, { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Pad from "./components/Pad";

const App = () => {
  // variables
  const [theme, setTheme] = useState(0);
  const [input, setInput] = useState({ num: 0, sign: "", res: 0 });

  // functions
  function changeTheme(value) {
    // console.log(value);
    setTheme(value);
  }

  function handleInput(value) {
    !isNaN(value)
      ? handleNumButton(value)
      : value === "."
      ? handleCommaButton(value)
      : value === "RESET"
      ? handleResetButton()
      : value === "+" || "-" || "x" || "/"
      ? handleOperatorButton(value)
      : value === "DEL"
      ? handleDeleteButton()
      : value === "="
      ? handleEqualButton()
      : handleResetButton();
    // console.log(value);
  }

  function handleNumButton(value) {
    setInput({
      ...input,
      num: input.num === 0 || input.num === "0" ? value : input.num + value,
      res:
        input.num === 0 || input.num === "0" || isNaN(input.res)
          ? Number(value)
          : input.res + value,
    });
    console.log(input);
  }

  function handleCommaButton() {
    setInput({
      ...input,
      num: input.num + ",",
      res: input.num + ",",
    });
  }

  function handleOperatorButton(value) {
    setInput({ ...input, sign: value, res: value });
    console.log(input);
  }

  function handleResetButton() {
    setInput({ ...input, num: 0, sign: "", res: 0 });
  }

  function handleEqualButton() {
    const math = (a, sign, b) =>
      sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "/"
        ? a / b
        : a * b;

    setInput({
      ...input,
      res:
        input.res === 0 && input.sign === "/"
          ? "Can't divide with 0"
          : math(Number(input.num), input.sign, Number(input.res)),
      num: 0,
      sign: "",
    });
    console.log(input);
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
