import Dice from "../../Dice";
import classes from "./styles.module.css";

export default function RollHistoryItem({
  number,
  order,
}: {
  number: number;
  order: number;
}) {
  return (
    <main className={classes.mainContainer}>
      <div className={classes.rollNumber}>Roll: {order}</div>
      <Dice number={number} size="small" />
    </main>
  );
}
