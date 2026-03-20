"use client";

import { useState } from "react";
import { MyButtonShared } from "@/components/MyButtonShared";
import MyPanelTitle from "./MyPanelTitle";

export default function MyPanelButtons() {
  const [count, setCount] = useState(0);
  function handleSharedButtonClick() {
    setCount(count + 1);
  }

  return (
    <>
      <MyPanelTitle count={count} />
      <MyButtonShared count={count} onClick={handleSharedButtonClick} />
      <MyButtonShared count={count} onClick={handleSharedButtonClick} />
    </>
  );
}
