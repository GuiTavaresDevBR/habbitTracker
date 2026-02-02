import styles from "./sidenav.module.css";

export default function sideNav() {
  return (
    <nav className={styles.sideNav}>
      <ul>
        <li>
          <button className={styles.active}>Dashboard</button>
        </li>
        <li>
          <button>Habits</button>
        </li>
        <li>
          <button>Settings</button>
        </li>
      </ul>
    </nav>
  );
}
