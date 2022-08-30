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
          ? button.value
          : input.sign !== ""
          ? input.num
          : (input.num + button.value).substring(0, 16),
      res:
        input.res === 0 || input.res === "0" || isNaN(input.res)
          ? button.value
          : (input.res + button.value).substring(0, 16),
    });
  }

  function handleCommaButton(button) {
    console.log(`comma was trigger : ${button.value}`);
    setInput({
      ...input,
      num:
        input.num === 0
          ? "0."
          : input.num.includes(".")
          ? input.num
          : input.num + button.value,
      res:
        input.num === 0
          ? "0."
          : input.res.includes(".")
          ? input.res
          : input.sign === input.res
          ? "0."
          : input.res + button.value,
    });
  }

  function handleOperatorButton(button) {
    console.log(`operator was trigger : ${button.value}`);
    setInput({
      ...input,
      sign:
        input.num === 0 || input.num === "0"
          ? ""
          : input.sign === ""
          ? button.value
          : input.sign,
      res:
        input.num === 0 || input.num === "0"
          ? 0
          : input.sign === ""
          ? button.value
          : input.sign !== ""
          ? input.res
          : input.sign,
    });
  }

  function handleDeleteButton(button) {
    console.log(`delete was trigger : ${button.value}`);
    setInput({
      ...input,
      num:
        input.num === 0 || input.num === "0" || input.sign !== ""
          ? input.num
          : input.num.length < 2
          ? 0
          : input.num.slice(0, -1),
      sign: input.sign !== "" && input.res === input.sign ? "" : input.sign,
      res:
        input.res === 0 || input.res === "0"
          ? input.res
          : input.res.length < 2
          ? 0
          : input.res.slice(0, -1),
    });
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
        num:
          input.res === 0 && input.sign === "/"
            ? 0
            : math(Number(input.num), input.sign, Number(input.res)).toString(),
        sign: "",
        res:
          input.res === "0" && input.sign === "/"
            ? "Can't divide with 0"
            : math(Number(input.num), input.sign, Number(input.res))
                .toString()
                .substring(0, 16),
      });
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
