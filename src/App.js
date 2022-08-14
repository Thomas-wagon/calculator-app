import React, { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Pad from "./components/Pad";

const App = () => {
  const [theme, setTheme] = useState(0);
  const [input, setInput] = useState("");

  function changeTheme(value) {
    // console.log(value);
    setTheme(value);
  }

  function populateInput(value) {
    // console.log(value);
    setInput(value);
  }
  return (
    <div className={`calculator t${theme}`}>
      <Header changeThemeFct={changeTheme} />
      <Screen input={input} />
      <Pad communicateToApp={populateInput} />
    </div>
  );
};

export default App;
