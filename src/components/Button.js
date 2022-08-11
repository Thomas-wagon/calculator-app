import React from "react";

const Button = ({ button }) => {
  return (
    <div className={`button ${button.type}`}>
      <p>{button.value}</p>
    </div>
  );
};

export default Button;
