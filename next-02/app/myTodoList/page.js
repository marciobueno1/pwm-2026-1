"use client";

import { useState } from "react";
import Link from "next/link";
import { getTasks } from "@/api";

export default function MyTodoList() {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    setTasks([...tasks, description]);
    setDescription("");
  }
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Descrição da tarefa"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <button>Adicionar</button>
      </form>
      <hr />
      {tasks.length === 0 && <p>Adicione uma tarefa para exibir aqui.</p>}
      <ol>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ol>
      <hr />
      <Link href="/">Voltar</Link>
      <hr />
      <button
        onClick={async () => {
          const backEndTasks = await getTasks();
          console.log("backEndTasks", backEndTasks.data);
        }}
      >
        Buscar tarefas no servidor
      </button>
    </>
  );
}
