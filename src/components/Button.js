import React from "react";

const Button = ({ button }) => {
  return (
    <div className="button">
      <p>{button.value}</p>
    </div>
  );
};

export default Button;
