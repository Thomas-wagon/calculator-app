import React, { useState } from "react";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Pad from "./components/Pad";

const App = () => {
  const [theme, setTheme] = useState(0);

  function changeTheme(value) {
    // console.log(value);
    setTheme(value);
  }

  function displayOnApp(value) {
    console.log(value);
  }
  return (
    <div className={`calculator t${theme}`}>
      <Header changeThemeFct={changeTheme} />
      <Screen />
      <Pad communicateToApp={displayOnApp} />
    </div>
  );
};

export default App;
