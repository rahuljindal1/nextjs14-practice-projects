"use client";

import { useState } from "react";
import { Button } from "../../../components";
import Dice from "./components/Dice";
import RollHistory from "./components/RollHistory";
import styles from "./styles.module.css";

const randomDiceRollNumber = () => Math.floor(Math.random() * 6) + 1;

export default function DiceRollSimulator() {
  const [currentRollNumber, setCurrentRollNumber] = useState(
    randomDiceRollNumber()
  );
  const [rollHistory, setRollHistory] = useState<number[]>([]);

  const rollDiceClickHandler = () => {
    const currentRoll = randomDiceRollNumber();
    setCurrentRollNumber(currentRoll);
    setRollHistory([...rollHistory, currentRoll]);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.title}>Dice Roll Simulator</div>
      <div className={styles.diceContainer}>
        <Dice number={currentRollNumber} />
      </div>
      <div className={styles.btnContainer}>
        <Button
          btnText="Roll Dice"
          onClick={rollDiceClickHandler}
          size="large"
        />
      </div>
      <div className={styles.rollHistoryContainer}>
        <RollHistory rollHistory={rollHistory} />
      </div>
    </main>
  );
}
