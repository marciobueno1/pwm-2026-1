"use client";

import { useState } from "react";
import Link from "next/link";
import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Task from "@/components/Task";

export default function MyTodoList() {
  const queryClient = useQueryClient();
  const { data, isFetching, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  const addMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const deleteMutation = useMutation({
    mutationFn: deleteTask,
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
    addMutation.mutate({ description });
    setDescription("");
  }

  function handleChange(updatedTask) {
    updateMutation.mutate(updatedTask);
  }

  function handleDelete(task) {
    deleteMutation.mutate(task);
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
        <button disabled={addMutation.isPending}>Adicionar</button>
      </form>
      <hr />
      {data?.results.length === 0 && (
        <p>Adicione uma tarefa para exibir aqui.</p>
      )}
      <ol>
        {data?.results.map((task) => (
          <Task
            key={task.objectId}
            task={task}
            onChange={handleChange}
            onDelete={handleDelete}
            disabled={
              addMutation.isPending ||
              updateMutation.isPending ||
              deleteMutation.isPending
            }
          />
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
