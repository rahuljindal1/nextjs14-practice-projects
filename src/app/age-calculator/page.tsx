"use client";

import Card from "../../../components/Card";
import styles from "./styles.module.css";

export default function AgeCalculator() {
  return (
    <main className={styles.mainContainer}>
      <Card customStyles={[styles.cardStyles]}>
        <div className={styles.title}>Age Calculator</div>
        <div className={styles.subTitle}>Enter your date of birth</div>
        <input className={styles.dateInput} type="date" />
        <button className={styles.btn}>Calculate Age</button>
        <div className={styles.result}>Your age is 2 years old</div>
      </Card>
    </main>
  );
}
