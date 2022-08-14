import React from "react";

const Button = ({ button, giveToPad }) => {
  function getInput(event) {
    // console.log(event.target.value);
    giveToPad(event.target.value);
  }
  return (
    <input
      type="button"
      value={button.value}
      className={`${button.type}`}
      onClick={getInput}
    />
  );
};

export default Button;
