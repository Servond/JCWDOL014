import { useState, useMemo, useContext } from "react";
import { UserContext, IUser } from "../App";

function HookMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const user = useContext<IUser>(UserContext);

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }

    return number % 2 === 0;
  }, [number]);

  return (
    <>
      <div>
        <h1>Use Memo</h1>
        <div>Hello {user?.user}</div>
        <button onClick={() => setNumber(number + 1)}>number : {number}</button>
        <button onClick={() => setNumber(1)}>number : {number}</button>
        <div>{isNumberEven ? "even" : "odd"}</div>
        <button onClick={() => setCount(count + 1)}>count : {count}</button>
      </div>
    </>
  );
}

export default HookMemo;
