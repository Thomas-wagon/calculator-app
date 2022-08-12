import React, { useState } from "react";
import Header from "./components/Header";
import Pad from "./components/Pad";
import Screen from "./components/Screen";

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
