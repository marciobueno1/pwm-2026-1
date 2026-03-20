"use client";

export function MyButtonShared({ count, onClick }) {
  return <button onClick={onClick}>I'm a shared button: {count}</button>;
}
