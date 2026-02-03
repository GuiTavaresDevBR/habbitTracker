import { useState } from "react";
import styles from "./addhabbitmodal.module.css";

export default function AddHabbitModal(props: {
  onClose: () => void;
  onAddHabbit: (name: string, description: string, frequency: string) => void;
}) {
  const [habbitName, setHabbitName] = useState("");
  const [habbitDescription, setHabbitDescription] = useState("");
  const [habbitFrequency, setHabbitFrequency] = useState("daily");
  const [errors, setErrors] = useState({
    name: false,
    description: false,
  });

  function handleAddHabbit() {
    const nextErrors = {
      name: habbitName.trim() === "",
      description: habbitDescription.trim() === "",
    };

    if (nextErrors.name || nextErrors.description) {
      setErrors(nextErrors);
      return;
    }
    props.onAddHabbit(habbitName, habbitDescription, habbitFrequency);
  }

  function handleOnChangeInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    if (name === "habbitName") {
      setHabbitName(value);
      setErrors((prev) => ({ ...prev, name: false }));
      return;
    }

    if (name === "habbitDescription") {
      setHabbitDescription(value);
      setErrors((prev) => ({ ...prev, description: false }));
    }
  }

  return (
    <div className={styles.backgroundModal}>
      <div className={styles.addHabbitModalContainer}>
        <h2> Adicionar novo Hábito: </h2>
        <div className={styles.inputContainer}>
          <p> Habbit Name:</p>
          <input
            type="text"
            placeholder="Informe nome do hábito"
            name="habbitName"
            value={habbitName}
            onChange={handleOnChangeInput}
            className={errors.name ? styles.dangerInput : ""}
          />
        </div>
        <div className={styles.textareaContainer}>
          <p>Descrição do Hábito:</p>
          <textarea
            placeholder="Description:"
            name="habbitDescription"
            value={habbitDescription}
            onChange={handleOnChangeInput}
            className={errors.description ? styles.dangerInput : ""}
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
          <button className={styles.addButton} onClick={handleAddHabbit}>
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
