import React, { useState } from "react";
import Button from "./Button";

const Pad = () => {
  const [buttons, setbuttons] = useState([
    { id: 1, value: "7" },
    { id: 2, value: "8" },
    { id: 3, value: "9" },
    { id: 4, value: "DEL" },
    { id: 5, value: "4" },
    { id: 6, value: "5" },
    { id: 7, value: "6" },
    { id: 8, value: "+" },
    { id: 9, value: "1" },
    { id: 10, value: "2" },
    { id: 11, value: "3" },
    { id: 12, value: "-" },
    { id: 13, value: "." },
    { id: 14, value: "0" },
    { id: 15, value: "/" },
    { id: 16, value: "x" },
    { id: 17, value: "RESET" },
    { id: 18, value: "=" },
  ]);
  return (
    <div className="pad">
      {buttons.map((button) => (
        <Button button={button} key={button.id} />
      ))}
    </div>
  );
};

export default Pad;
