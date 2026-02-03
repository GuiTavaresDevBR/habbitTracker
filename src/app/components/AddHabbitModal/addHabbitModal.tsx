import { useState } from "react";
import styles from "./addhabbitmodal.module.css";

export default function AddHabbitModal(props: {
  onClose: () => void;
  onAddHabbit: () => void;
}) {
  const [habbitName, setHabbitName] = useState("");
  const [habbitDescription, setHabbitDescription] = useState("");
  const [habbitFrequency, setHabbitFrequency] = useState("daily");

  return (
    <div className={styles.backgroundModal}>
      <div className={styles.addHabbitModalContainer}>
        <h2> Adicionar novo Hábito: </h2>
        <div className={styles.inputContainer}>
          <p> Habbit Name:</p>
          <input
            type="text"
            placeholder="Informe nome do hábito"
            value={habbitName}
            onChange={(e) => setHabbitName(e.target.value)}
          />
        </div>
        <div className={styles.textareaContainer}>
          <p>Descrição do Hábito:</p>
          <textarea
            placeholder="Description:"
            value={habbitDescription}
            onChange={(e) => setHabbitDescription(e.target.value)}
          />
        </div>
        <div className={styles.frenquencyContainer}>
          <p> Frequência:</p>
          <select
            value={habbitFrequency}
            onChange={(e) => setHabbitFrequency(e.target.value)}
          >
            <option value="daily"> Diário </option>
            <option value="weekly"> Semanal </option>
            <option value="monthly"> Mensal </option>
          </select>
        </div>
        <div className={styles.buttonsContainer}>
          <button className={styles.addButton} onClick={props.onAddHabbit}>
            Adicionar
          </button>
          <button className={styles.rmvButton} onClick={props.onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
