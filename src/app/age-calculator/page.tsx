"use client";

import { ChangeEvent, useState } from "react";
import { Button, Card, Input } from "../../../components";
import styles from "./styles.module.css";

export default function AgeCalculator() {
  const [age, setAge] = useState("");
  const [ageInYears, setAgeInYears] = useState<number | undefined>();

  const calculateAgeHandler = () => {
    if (!age) {
      alert("Please provide your birth date");
      return;
    }
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const birthDate = new Date(age);
    const birthYear = birthDate.getFullYear();
    setAgeInYears(currentYear - birthYear);
  };

  const Age = () => {
    if (ageInYears === undefined) {
      return <></>;
    }

    return <div className={styles.result}>Your are {ageInYears} years old</div>;
  };

  return (
    <main className={styles.mainContainer}>
      <Card customStyles={[styles.cardStyles]}>
        <div className={styles.title}>Age Calculator</div>
        <div className={styles.subTitle}>Enter your date of birth</div>
        <Input
          customStyles={[styles.dateInput]}
          name="age"
          value={age}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setAge(e.target.value)
          }
          type="date"
        />
        <Button btnText="Calculate Age" onClick={calculateAgeHandler} />
        <Age />
      </Card>
    </main>
  );
}
