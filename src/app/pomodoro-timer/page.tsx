"use client";

import { useEffect, useState } from "react";
import { Button } from "../../../components";
import styles from "./styles.module.css";

type Timer = {
  minutes: string;
  seconds: string;
};

const defaultTimer = { minutes: "25", seconds: "00" };

export default function PomodoroTimer() {
  const [isTimerOn, setIsTimeOn] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();
  const [timer, setTimer] = useState<Timer>(defaultTimer);

  const resetBtnHandler = () => {
    setTimer(defaultTimer);
    setIsTimeOn(false);
  };

  const startBtnHandler = () => {
    setIsTimeOn(true);
  };

  const stopBtnHandler = () => {
    setIsTimeOn(false);
    clearTimeout(timeoutId);
  };

  const reduceTimerCount = () => {
    const { minutes, seconds } = timer;
    const minutesInt = Number(minutes);
    const secondsInt = Number(seconds);

    if (minutesInt === 0 && secondsInt === 0) {
      return;
    }

    const newSeconds = secondsInt === 0 ? 59 : secondsInt - 1;
    const newMinutes = secondsInt === 0 ? minutesInt - 1 : minutesInt;

    setTimer({
      minutes: String(newMinutes).padStart(2, "0"),
      seconds: String(newSeconds).padStart(2, "0")
    });
  };

  useEffect(() => {
    if (!isTimerOn) {
      return;
    }

    const newTimeoutId = setTimeout(() => {
      reduceTimerCount();
      setTimeoutId(newTimeoutId);
    }, 1000);
  }, [isTimerOn, timeoutId]);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.title}>Pomodoro Timer</div>
      <div className={styles.timer}>{`${timer.minutes}:${timer.seconds}`}</div>
      <div className={styles.actions}>
        <Button
          customStyles={[styles.start]}
          btnText="START"
          isDisabled={isTimerOn}
          onClick={startBtnHandler}
        />
        <Button
          customStyles={[styles.stop]}
          btnText="STOP"
          onClick={stopBtnHandler}
        />
        <Button
          customStyles={[styles.reset]}
          btnText="RESET"
          onClick={resetBtnHandler}
        />
      </div>
    </main>
  );
}
