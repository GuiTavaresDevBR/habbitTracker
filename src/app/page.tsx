"use client";
import styles from "./page.module.css";
import AddHabbitModal from "./components/AddHabbitModal/addHabbitModal";
import { useState } from "react";
import { HabbitType } from "./types/habbitType";
import SingleHabbitContainer from "./components/SingleHabbitContainer/singleHabbitContainer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [habitsList, setHabbitsList] = useState<HabbitType[]>([]);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleAddHabbit(
    name: string,
    description: string,
    frequency: string,
  ) {
    const newHabbit: HabbitType = {
      id: Math.random().toString(),
      name: name,
      description: description,
      frequency: frequency as "daily" | "weekly" | "monthly",
      createdAt: new Date(),
    };
    setHabbitsList([...habitsList, newHabbit]);
    setIsModalOpen(false);
  }

  return (
    <>
      <div className={styles.dashBoardContainer}>
        <header>
          <h2> Meus Hábitos: {habitsList.length} </h2>
          <button onClick={() => setIsModalOpen(true)}>
            + Adicionar Novo Hábito
          </button>
        </header>
        <div className={styles.habbitsContainer}>
          <p> Nao há habitos cadastrados</p>
        </div>
      </div>
      {isModalOpen && (
        <AddHabbitModal
          onClose={handleCloseModal}
          onAddHabbit={handleAddHabbit}
        />
      )}
    </>
  );
}
