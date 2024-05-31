import { useState } from "react";

function HookState() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  return (
    <>
      <h1>Use State</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>{input}</div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </>
  );
}

export default HookState;
