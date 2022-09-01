import React from "react";

const Button = ({ button, giveToPad, buttonClicked }) => {
  function getInput(event) {
    // console.log(event.target.value);
    giveToPad(event.target);
  }
  return (
    <div className={`button ${button.variety}`}>
      <input
        type="button"
        value={button.value}
        className={`${button.variety}`}
        onClick={getInput}
      />
      <div className={`backdiv ${button.variety}`}></div>
    </div>
  );
};

export default Button;
