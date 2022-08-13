import React, { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Pad from "./components/Pad";

const App = () => {
  const [theme, setTheme] = useState(0);
  function changeTheme(value) {
    setTheme(value);
  }
  return (
    <div className={`calculator t${theme}`}>
      <Header changeThemeFct={changeTheme} />
      <Screen />
      <Pad />
    </div>
  );
};

export default App;
