import { HabbitType } from "@/app/types/habbitType";
import styles from "./singleHabbitContainer.module.css";

export default function SingleHabbitContainer(props: {
  habbit: HabbitType;
  onDelete: (habbitId: string) => void;
}) {
  return (
    <div className={styles.singleHabbitContainer}>
      <header>
        <h3> {props.habbit.name} </h3>
      </header>
      <div>
        <p>
          {" "}
          <span> Descrição :</span> {props.habbit.description}{" "}
        </p>
      </div>
      <footer>
        <button>Concluir</button>
        <button> Editar</button>
        <button onClick={() => props.onDelete(props.habbit.id)}>Excluir</button>
      </footer>
    </div>
  );
}
