export default function Task({ task, onChange, onDelete, disabled }) {
  function handleChange() {
    const updatedTask = { objectId: task.objectId, done: !task.done };
    onChange(updatedTask);
  }
  function handleDelete() {
    onDelete(task);
  }
  return (
    <>
      <li>
        {task.description}{" "}
        <input
          type="checkbox"
          defaultChecked={task.done}
          onChange={handleChange}
          disabled={disabled}
        />
        <button onClick={handleDelete} disabled={disabled}>
          x
        </button>
      </li>
    </>
  );
}
