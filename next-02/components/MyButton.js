"use client";

export default function MyButton({ title }) {
  function handleClick(evt) {
    console.log("clicked on: ", evt.target);
    alert("You clicked me!");
  }

  return (
    <button onClick={handleClick}>
      {title} - {3 ** 5}
    </button>
  );
}
