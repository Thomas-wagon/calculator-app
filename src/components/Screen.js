import React from "react";

const Screen = (props) => {
  return (
    <div className="screen">
      <h1>{`${props.input.res}`}</h1>
    </div>
  );
};

export default Screen;
