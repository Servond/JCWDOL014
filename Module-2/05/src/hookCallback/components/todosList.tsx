import { memo } from "react";

interface ITodos {
  todos: string[];
  addTodo: () => void;
}

const Todos = memo((props: ITodos) => {
  const { todos, addTodo } = props;
  console.log("child kerender");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, idx) => (
        <p key={idx}>{todo}</p>
      ))}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
});

export { Todos };
