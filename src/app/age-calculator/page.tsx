"use client";

import { Button, Card } from "../../../components";
import styles from "./styles.module.css";

export default function AgeCalculator() {
  return (
    <main className={styles.mainContainer}>
      <Card customStyles={[styles.cardStyles]}>
        <div className={styles.title}>Age Calculator</div>
        <div className={styles.subTitle}>Enter your date of birth</div>
        <input className={styles.dateInput} type="date" />
        <Button btnText="Calculate Age" onClick={() => {}} />
        <div className={styles.result}>Your age is 2 years old</div>
      </Card>
    </main>
  );
}
