import { useState } from "react";

export default function Task({ task, onChange, onDelete, disabled }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  function handleChange() {
    const updatedTask = { objectId: task.objectId, done: !task.done };
    onChange(updatedTask);
  }
  function handleDelete() {
    onDelete(task);
  }
  function handleEditClick() {
    setIsEditing(!isEditing);
  }
  return (
    <>
      <li>
        <input
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
          readOnly={!isEditing}
          size={50}
        />{" "}
        <input
          type="checkbox"
          defaultChecked={task.done}
          onChange={handleChange}
          disabled={disabled}
        />
        <button onClick={handleDelete} disabled={disabled}>
          🗑
        </button>
        <button disabled={disabled}>✎</button>
      </li>
    </>
  );
}
