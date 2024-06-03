import { useState, useCallback } from "react";
import { Todos } from "./components/todosList";
function HookCallback() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  //   const addTodo = () => {
  //     setTodos((i) => [...i, "New Todo"]);
  //   };

  const addTodoCallback = useCallback(() => {
    setTodos((i) => [...i, "New Todo"]);
  }, []);

  return (
    <>
      <h1>Use Callback</h1>
      <Todos todos={todos} addTodo={addTodoCallback} />
      <div>
        Count: {count}
        <button onClick={() => setCount(count + 1)}> + </button>
      </div>
    </>
  );
}

export default HookCallback;
