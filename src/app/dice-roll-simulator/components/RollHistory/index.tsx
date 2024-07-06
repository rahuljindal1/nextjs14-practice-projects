import RollHistoryItem from "./RollHistoryItem";
import styles from "./styles.module.css";

export default function RollHistory({
  rollHistory,
}: {
  rollHistory: number[];
}) {
  return (
    <div className={styles.mainContainer}>
      {rollHistory.map((rollNumber, index) => (
        <RollHistoryItem key={index} order={index + 1} number={rollNumber} />
      ))}
    </div>
  );
}
