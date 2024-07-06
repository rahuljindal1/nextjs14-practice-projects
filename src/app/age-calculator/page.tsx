import AgeCalculatorCard from "./components/AgeCalculatorCard";
import styles from "./styles.module.css";

export default function AgeCalculator() {
  return (
    <main className={styles.mainContainer}>
      <AgeCalculatorCard />
    </main>
  );
}
