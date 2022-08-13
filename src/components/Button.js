import React from "react";

const Button = ({ button, displayInputFct }) => {
  function displayInput(event) {
    console.log(event.target.value);
    displayInputFct(event.target.value);
  }
  return (
    <input
      type="button"
      value={button.value}
      className={`${button.type}`}
      onClick={displayInput}
    />
  );
};

export default Button;
