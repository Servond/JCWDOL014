"use client";
import { useState } from "react";

// ini adalah client component
// sebuah component bisa dijadikan client component dengan menggunakan "use client"
// semua children didalam client component akan menjadi client component juga

function CounterSection() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1 className="text-3xl">Counter Section</h1>
      <p>Counter : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default CounterSection;
