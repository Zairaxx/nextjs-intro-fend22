import Image from "next/image";
import styles from "../page.module.css";
import TodoList from "../../components/TodoList";
export default async function Todos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-store",
  });
  const todos = await res.json();
  console.log(todos);
  return (
    <main className={styles.main}>
      <h2>Todos page</h2>
      <TodoList todos={todos} />
    </main>
  );
}
