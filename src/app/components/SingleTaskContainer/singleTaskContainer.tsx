import { HabbitType } from "@/app/types/habbitType";
import styles from "./singleTaskContainer.module.css";

export default function singleTaskContainer(props: { habbit: HabbitType }) {
  return (
    <div>
      <h3> {props.habbit.name} </h3>
    </div>
  );
}
