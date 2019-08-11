import React from "react";

const child = props => {
  return (
    <div class='btn-div'>
      CART:
      <button class='btn' onClick={props.addNumber}>
        +
      </button>
      {props.number}
      <button class='btn' onClick={props.subNumber}>
        -
      </button>
    </div>
  );
};

export default child;
