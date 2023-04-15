import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [fixedNumber, setFixedNumber] = useState(0);

  const addOne = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <h2>바뀌지 않는 값: {fixedNumber}</h2>
      <button onClick={addOne}>+1</button>
    </div>
  );
};

export default Counter;
