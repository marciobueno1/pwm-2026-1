"use client";

import { useState } from "react";
import Link from "next/link";
import { addTask, getTasks } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function MyTodoList() {
  const queryClient = useQueryClient();
  const { data, isFetching, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  const mutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const [description, setDescription] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!description) {
      alert("Descrição é um campo obrigatório!");
      return;
    }
    mutation.mutate({ description });
    setDescription("");
  }
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <hr />
      {error && <h3>Erro: {error}</h3>}
      {isFetching && <h3>Carregando dados do servidor...</h3>}
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Descrição da tarefa"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
        />
        <button disabled={mutation.isPending}>Adicionar</button>
      </form>
      <hr />
      {data?.results.length === 0 && (
        <p>Adicione uma tarefa para exibir aqui.</p>
      )}
      <ol>
        {data?.results.map((task) => (
          <li key={task.objectId}>{task.description}</li>
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
