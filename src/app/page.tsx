"use client";
import styles from "./page.module.css";
import AddHabbitModal from "./components/AddHabbitModal/addHabbitModal";
import { useState } from "react";
import { HabbitType } from "./types/habbitType";
import { create } from "domain";

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
        <h1> Meus hábitos Dashboard:</h1>
        {habitsList.length === 0 && <p> Nenhum hábito cadastrado. </p>}
        {habitsList.length > 0 && (
          <p> Voce tem {habitsList.length} hábitos cadastrados.</p>
        )}
        <button onClick={() => setIsModalOpen(true)}>
          + Adicionar Novo Hábito
        </button>
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
