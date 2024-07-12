import styles from "./style.module.css";

export default function GameStats({
  humanScore,
  computerScore
}: {
  humanScore: number;
  computerScore: number;
}) {
  return (
    <div className={styles.scores}>
      <div className={styles.humanScoreSection}>
        Your score: <span className={styles.humanScore}>{humanScore}</span>
      </div>
      <div className={styles.computeScoreSection}>
        Computer score:&nbsp;
        <span className={styles.computerScore}>{computerScore}</span>
      </div>
    </div>
  );
}
