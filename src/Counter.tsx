import { Button } from "./Button";
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{`Current: ${count}`}</div>
      <Button onClick={() => setCount(v => v + 1)}>+</Button>
      <Button onClick={() => setCount(v => v - 1)}>-</Button>
    </>
  );
}
