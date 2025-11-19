import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  function inc() {
    setCount(count + 1);
  }
  function dec() {
    setCount(count - 1);
  }
  return (
    <>
      <div className="text-3xl font-bold">counter:{count}</div>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>defaultcrement</button>
    </>
  );
}

export default Counter;
