import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  ICount,
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter";

function ReactRedux() {
  const count = useSelector(
    (state: { counter: ICount }) => state.counter.value
  );
  const [input, setInput] = useState<number>(0);
  const dispatch = useDispatch();

  const incrementAmount = () => {
    dispatch(incrementByAmount(input));
  };

  return (
    <div>
      <h1>React Redux</h1>
      <input type="number" onChange={(e) => setInput(Number(e.target.value))} />
      <button onClick={incrementAmount}>Increment By Amount</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default ReactRedux;
