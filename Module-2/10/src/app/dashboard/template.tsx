"use client";
import { useState } from "react";
export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Counter Template : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div className="border-2 border-black p-4">{children}</div>
    </div>
  );
}
