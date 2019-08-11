import React from "react";

const child = props => {
  return (
    <div class='btn-div'>
      CART:
      <button class='btn' onClick={props.addNumber}>
        {props.number}
      </button>
    </div>
  );
};

export default child;
