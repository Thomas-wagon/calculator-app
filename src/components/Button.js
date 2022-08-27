import React from "react";

const Button = ({ button, giveToPad }) => {
  function getInput(event) {
    // console.log(event.target.value);
    giveToPad(event.target);
  }
  return (
    <input
      type="button"
      value={button.value}
      className={`${button.variety}`}
      onClick={getInput}
    />
  );
};

export default Button;
