import { useState, useEffect } from "react";

function HookEffect() {
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const updateTitle = () => {
      document.title = input;
      console.log(count);
    };
    updateTitle();
  }, [input]);

  return (
    <>
      <div>
        <h1>Use Effect</h1>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </>
  );
}

export default HookEffect;
