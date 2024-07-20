"use client";

import { ChangeEvent, useState } from "react";
import styles from "./styles.module.css";
import { TextArea } from "../../../components";

const MAX_CHARACTER_LENGTH = 500;

export default function RealTimeCharacterCount() {
  const [remainingCharacters, setRemainingCharacter] =
    useState<number>(MAX_CHARACTER_LENGTH);

  const characterLengthChangeHandler = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value.trim();
    const inputLength = value.length;
    const remainingCharacters = MAX_CHARACTER_LENGTH - inputLength;
    setRemainingCharacter(remainingCharacters);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.card}>
        <div className={styles.mainHeading}>Real-time Character Count</div>
        <TextArea
          name="character-count"
          placeholder="Please write your text here..."
          maxLength={MAX_CHARACTER_LENGTH}
          onChange={characterLengthChangeHandler}
        />
        <div className={styles.statsSection}>
          <div className={styles.maxCharacterSection}>
            Total Characters:{" "}
            <span className={styles.maxCharacterContainer}>
              {MAX_CHARACTER_LENGTH}
            </span>
          </div>
          <div className={styles.remainingCharacterSection}>
            Remaining:{" "}
            <span className={styles.remainingCharacterContainer}>
              {remainingCharacters}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
