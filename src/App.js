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

  function handleInput(value) {
    !isNaN(value)
      ? handleNumButton(value)
      : value === "."
      ? handleCommaButton(value)
      : value === "+" || value === "-" || value === "x" || value === "/"
      ? handleOperatorButton(value)
      : value === "="
      ? handleEqualButton()
      : handleResetButton();
  }

  function handleNumButton(value) {
    console.log(`number was trigger : ${value}`);
    setInput({
      ...input,
      num:
        input.num === 0 || input.num === "0"
          ? value
          : input.sign !== ""
          ? input.num
          : input.num + value,
      res:
        input.res === 0 || input.res === "0"
          ? value
          : input.sign !== ""
          ? value
          : input.res + value,
    });
  }

  function handleCommaButton(value) {
    console.log(`comma was trigger : ${value}`);
    setInput({
      ...input,
      num: input.num % 1 === 0 ? input.num : input.num + ",",
      res: input.num + ",",
    });
  }

  function handleOperatorButton(value) {
    console.log(`operator was trigger : ${value}`);
    setInput({ ...input, sign: value, res: value });
  }

  function handleResetButton(value) {
    console.log(`reset was trigger : ${value}`);
    setInput({ ...input, num: 0, sign: "", res: 0 });
  }

  function handleEqualButton(value) {
    console.log(`equal was trigger : ${value}`);
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
