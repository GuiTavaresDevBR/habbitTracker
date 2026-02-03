import styles from "./addhabbitmodal.module.css";

export default function AddHabbitModal(props: { onClose: () => void }) {
  return (
    <div className={styles.backgroundModal}>
      <div className={styles.addHabbitModalContainer}>
        <h2> Adicionar novo Hábito: </h2>
        <div>
          <p> Habbit Name:</p>
          <input type="text" placeholder="Informe nome do hábito" />
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.addButton}>Adicionar</button>
          <button className={styles.rmvButton} onClick={props.onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
