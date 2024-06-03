import { useState } from "react";

function useCounter(initialValue: number, payload: number) {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount(count + payload);
  };

  const decrement = () => {
    setCount(count - payload);
  };

  return [count, increment, decrement] as const;
}

export default useCounter;
