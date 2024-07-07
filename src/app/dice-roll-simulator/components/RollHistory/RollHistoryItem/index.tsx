import Dice from "../../Dice";
import styles from "./styles.module.css";

export default function RollHistoryItem({
  number,
  order
}: {
  number: number;
  order: number;
}) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.rollNumber}>Roll: {order}</div>
      <Dice number={number} size="small" />
    </main>
  );
}
