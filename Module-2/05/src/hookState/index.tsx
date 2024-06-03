import { useState } from "react";
import useCounter from "../hooks/useCounter";

function HookState() {
  //   const [count, setCount] = useState<number>(0);
  const [count, increment, decrement] = useCounter(0, 2);
  const [input, setInput] = useState<string>("");

  return (
    <>
      <h1>Use State</h1>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <div>{input}</div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </>
  );
}

export default HookState;
