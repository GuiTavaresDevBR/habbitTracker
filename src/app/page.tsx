"use client";
import styles from "./page.module.css";
import AddHabbitModal from "./components/AddHabbitModal/addHabbitModal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className={styles.dashBoardContainer}>
        <h1> Meus hábitos Dashboard:</h1>
        <p> Você ainda não tem hábitos cadastrados.</p>
        <button onClick={() => setIsModalOpen(true)}>
          {" "}
          + Adicionar Novo Hábito{" "}
        </button>
      </div>
      {isModalOpen && <AddHabbitModal onClose={handleCloseModal} />}
    </>
  );
}
