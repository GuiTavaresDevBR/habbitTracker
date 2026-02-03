import styles from "./singleHabbitContainer.module.css";

export default function SingleHabbitContainer() {
  return (
    <div className={styles.singleHabbitContainer}>
      <header>
        <h3> Hábito Exemplo </h3>
      </header>
      <div>
        <p> Descrição do hábito exemplo </p>
      </div>
      <footer>
        <button>Concluir</button>
        <button> Editar</button>
        <button> Excluir</button>
      </footer>
    </div>
  );
}
