"use client";

import styles from "./styles.module.css";

export default function AgeCalculatorCard() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.title}>Age Calculator</div>
      <div className={styles.subTitle}>Enter your date of birth</div>
      <input className={styles.dateInput} type="date" />
      <button className={styles.btn}>Calculate Age</button>
      <div className={styles.result}>Your age is 2 years old</div>
    </main>
  );
}
