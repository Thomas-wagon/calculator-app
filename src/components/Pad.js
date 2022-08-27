import React from "react";
// components
import Button from "./Button";

const Pad = ({ communicateToApp }) => {
  // variables
  const buttons = [
    { id: 1, value: 7, variety: "number" },
    { id: 2, value: 8, variety: "number" },
    { id: 3, value: 9, variety: "number" },
    { id: 4, value: "DEL", variety: "delete" },
    { id: 5, value: 4, variety: "number" },
    { id: 6, value: 5, variety: "number" },
    { id: 7, value: 6, variety: "number" },
    { id: 8, value: "+", variety: "operator" },
    { id: 9, value: 1, variety: "number" },
    { id: 10, value: 2, variety: "number" },
    { id: 11, value: 3, variety: "number" },
    { id: 12, value: "-", variety: "operator" },
    { id: 13, value: ".", variety: "dot" },
    { id: 14, value: 0, variety: "number" },
    { id: 15, value: "/", variety: "operator" },
    { id: 16, value: "x", variety: "operator" },
    { id: 17, value: "RESET", variety: "reset" },
    { id: 18, value: "=", variety: "equal" },
  ];

  // function
  function displayOnPad(button) {
    // console.log(button);
    communicateToApp(button);
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
