import { useReducer } from "react";

interface CountAction {
  type: string;
  payload: number;
}

interface IState {
  count: number;
  number: number;
}

function reducer(state: IState, action: CountAction) {
  switch (action.type) {
    case "increment number":
      return { number: state.number + action.payload, count: state.count };
    case "decrement number":
      return { number: state.number - action.payload, count: state.count };
    case "increment count":
      return { count: state.count + action.payload, number: state.number };
    case "decrement count":
      return { count: state.count - action.payload, number: state.number };
    default:
      return state;
  }
}

function HookReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, number: 0 });

  const incrementNumber = () => {
    dispatch({ type: "increment number", payload: 1 });
  };

  const decrementNumber = () => {
    dispatch({ type: "decrement number", payload: 1 });
  };

  const incrementCount = () => {
    dispatch({ type: "increment count", payload: 1 });
  };

  const decrementCount = () => {
    dispatch({ type: "decrement count", payload: 1 });
  };
  return (
    <>
      <div>
        <h1>Use Reducer</h1>
        <button onClick={incrementNumber}>number : {state.number}</button>
        <button onClick={decrementNumber}>number : {state.number}</button>
        <button onClick={incrementCount}>count : {state.count}</button>
        <button onClick={decrementCount}>count : {state.count}</button>
      </div>
    </>
  );
}

export default HookReducer;
