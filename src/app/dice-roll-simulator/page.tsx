"use client";

import { useEffect, useState } from "react";
import { Button } from "../../../components";
import Dice from "./components/Dice";
import RollHistory from "./components/RollHistory";
import styles from "./styles.module.css";

const randomDiceRollNumber = () => Math.floor(Math.random() * 6) + 1;

const animateDiceConfig = {
  durationInMilliSeconds: 2000
};

export default function DiceRollSimulator() {
  const [currentRollNumber, setCurrentRollNumber] =
    useState(randomDiceRollNumber);
  const [rollHistory, setRollHistory] = useState<number[]>([]);
  const [animateDice, setAnimateDice] = useState(false);

  const rollDiceClickHandler = () => {
    const currentRoll = randomDiceRollNumber();
    setAnimateDice(true);

    setTimeout(() => {
      setCurrentRollNumber(currentRoll);
      setRollHistory([...rollHistory, currentRoll]);
    }, animateDiceConfig.durationInMilliSeconds);
  };

  const clearBtnClickHandler = () => {
    setRollHistory([]);
  };

  const ClearBtn = () => {
    if (rollHistory.length === 0) {
      return <></>;
    }

    return (
      <div className={styles.btnContainer}>
        <Button
          btnText="Clear"
          type="secondary"
          onClick={clearBtnClickHandler}
          isDisabled={animateDice}
        />
      </div>
    );
  };

  useEffect(() => {
    if (animateDice) {
      setTimeout(() => {
        setAnimateDice(false);
      }, animateDiceConfig?.durationInMilliSeconds);
    }
  }, [animateDice]);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.title}>Dice Roll Simulator</div>
      <div className={styles.diceContainer}>
        <Dice
          number={currentRollNumber}
          animate={animateDice ? animateDiceConfig : undefined}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button
          btnText="Roll Dice"
          onClick={rollDiceClickHandler}
          size="large"
          isDisabled={animateDice}
        />
      </div>
      <div className={styles.rollHistoryContainer}>
        <RollHistory rollHistory={rollHistory} />
      </div>
      <ClearBtn />
    </main>
  );
}
