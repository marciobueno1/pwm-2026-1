//import styles from "./page.module.css";
import MeuBotao from "@/components/MyButton";
import { MyButton2 as MeuBotao2 } from "@/components/MyButton2";
import MyList from "@/components/MyList";

export default function Home() {
  return (
    <>
      <h1 className="titulo">Welcome to my app</h1>
      <MeuBotao title="Eu sou o botão 1" />
      <MeuBotao title="Eu sou outro botão 1" />
      <hr />
      <MeuBotao2 />
      <MeuBotao2 />
      <hr />
      <MyList />
    </>
  );
}
