import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Pad from "./components/Pad";

const App = () => {
  useEffect(() => {
    console.log(input);
  });
  // variables
  const [theme, setTheme] = useState(0);
  const [input, setInput] = useState({ num: 0, sign: "", res: 0 });

  // functions
  function changeTheme(value) {
    setTheme(value);
  }

  function handleInput(button) {
    button.className === "number"
      ? handleNumButton(button)
      : button.className === "dot"
      ? handleCommaButton(button)
      : button.className === "operator"
      ? handleOperatorButton(button)
      : button.className === "delete"
      ? handleDeleteButton(button)
      : button.className === "equal"
      ? handleEqualButton(button)
      : handleResetButton(button);
  }

  function handleNumButton(button) {
    console.log(`number was trigger : ${button.value}`);
    setInput({
      ...input,
      num:
        input.num === 0 || input.num === "0"
          ? Number(button.value)
          : input.sign !== ""
          ? Number(input.num)
          : Number(input.num + button.value),
      res:
        input.res === 0 || input.res === "0" || isNaN(input.res)
          ? Number(button.value)
          : Number(input.res + button.value),
    });
  }

  function handleCommaButton(button) {
    console.log(`comma was trigger : ${button.value}`);
    setInput({
      ...input,
      num: input.num % 1 === 0 ? input.num : input.num + button.value,
      res: input.num + button.value,
    });
  }

  function handleOperatorButton(button) {
    console.log(`operator was trigger : ${button.value}`);
    setInput({ ...input, sign: button.value, res: button.value });
  }

  function handleResetButton(button) {
    console.log(`reset was trigger : ${button.value}`);
    setInput({ ...input, num: 0, sign: "", res: 0 });
  }

  function handleEqualButton(button) {
    console.log(`equal was trigger : ${button.value}`);
    if (input.num && input.sign) {
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
