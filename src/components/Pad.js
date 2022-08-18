import React, { useState } from "react";
// components
import Button from "./Button";

const Pad = ({ communicateToApp }) => {
  // variables
  const buttons = [
    { id: 1, value: "7", type: "number" },
    { id: 2, value: "8", type: "number" },
    { id: 3, value: "9", type: "number" },
    { id: 4, value: "DEL", type: "delete" },
    { id: 5, value: "4", type: "number" },
    { id: 6, value: "5", type: "number" },
    { id: 7, value: "6", type: "number" },
    { id: 8, value: "+", type: "plus" },
    { id: 9, value: "1", type: "number" },
    { id: 10, value: "2", type: "number" },
    { id: 11, value: "3", type: "number" },
    { id: 12, value: "-", type: "minus" },
    { id: 13, value: ".", type: "dot" },
    { id: 14, value: "0", type: "number" },
    { id: 15, value: "/", type: "divide" },
    { id: 16, value: "x", type: "multiply" },
    { id: 17, value: "RESET", type: "reset" },
    { id: 18, value: "=", type: "equal" },
  ];

  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    result: 0,
  });

  // function
  function displayOnPad(value) {
    // console.log(value);
    communicateToApp(value);
  }

  return (
    <div className="pad">
      {buttons.map((button) => (
        <Button button={button} key={button.id} giveToPad={displayOnPad} />
      ))}
    </div>
  );
};

export default Pad;
