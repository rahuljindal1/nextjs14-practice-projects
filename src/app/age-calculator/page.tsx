"use client";

import { useState } from "react";
import { Button, Card, Input } from "../../../components";
import styles from "./styles.module.css";

export default function AgeCalculator() {
  const [age, setAge] = useState("");

  return (
    <main className={styles.mainContainer}>
      <Card customStyles={[styles.cardStyles]}>
        <div className={styles.title}>Age Calculator</div>
        <div className={styles.subTitle}>Enter your date of birth</div>
        <Input
          customStyles={[styles.dateInput]}
          name="age"
          value={age}
          onChange={() => {}}
          type="date"
        />
        <Button btnText="Calculate Age" onClick={() => {}} />
        <div className={styles.result}>Your age is 2 years old</div>
      </Card>
    </main>
  );
}
