"use client";

import { useState } from "react";

export function MyButton2() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>I'm a button 2: {count}</button>;
}
