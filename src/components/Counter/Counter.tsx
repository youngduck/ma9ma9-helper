import React from "react";

interface CounterProps {
  name?: string;
  startNumber: number;
}

const Counter = () => {
  const a: CounterProps = { startNumber: 2 };
  a.startNumber = 5;
  a.name = "kim";
  return (
    <div>
      <div>{a.name || "ㅋㅋ"}</div>
    </div>
  );
};

export default Counter;
