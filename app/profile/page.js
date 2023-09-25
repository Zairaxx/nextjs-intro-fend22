import Image from "next/image";
import styles from "../page.module.css";

export default async function Profile() {
  const res = await fetch("https://randomuser.me/api", {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  console.log(data);
  return (
    <main className={styles.main}>
      <h2>Profile page</h2>
      <h3>{data.results[0].name.first}</h3>
    </main>
  );
}
