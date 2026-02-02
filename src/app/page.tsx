import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <h1> Habbit Tracker</h1>
        <div>
          <p>X </p>
        </div>
      </header>
      <nav className={styles.sideMenu}>
        <button className={styles.active}> Home </button>
        <button> My Habbits</button>
        <button> Statics </button>
        <button> Setings</button>
      </nav>
      <main className={styles.mainContainer}>
        <h2> Welcome to Habbit Tracker</h2>
      </main>
    </div>
  );
}
