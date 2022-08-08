import React from "react";
import Header from "./components/Header";
import Pad from "./components/Pad";
import Screen from "./components/Screen";

const App = () => {
  return (
    <div className="calculator">
      <Header />
      <Screen />
      <Pad />
    </div>
  );
};

export default App;
