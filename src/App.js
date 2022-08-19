import React, { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Pad from "./components/Pad";

const App = () => {
  // variables
  const [theme, setTheme] = useState(0);
  const [input, setInput] = useState("0");

  // functions
  function changeTheme(value) {
    // console.log(value);
    setTheme(value);
  }

  function populateInput(value) {
    // console.log(value);
    setInput(value);
  }
  return (
    <div className={`container t${theme}`}>
      <div className="calculator">
        <Header changeThemeFct={changeTheme} />
        <Screen input={input} />
        <Pad communicateToApp={populateInput} />
      </div>
    </div>
  );
};

export default App;
