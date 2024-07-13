"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../../components";
import styles from "./styles.module.css";
import classNames from "classnames";

type StopwatchTimer = {
  hours: string;
  minutes: string;
  seconds: string;
  milliSeconds: string;
};

const DEFAULT_TIMER = {
  hours: "00",
  minutes: "00",
  seconds: "00",
  milliSeconds: ""
};

const calculateStopwatchTime = (startTime: Date): StopwatchTimer => {
  const elapsedTime = Date.now() - startTime.getTime();

  const milliseconds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    milliSeconds: String(milliseconds).padStart(2, "0")
  };
};

export default function Stopwatch() {
  const [timer, setTimer] = useState<StopwatchTimer>(DEFAULT_TIMER);
  const [startTime, setStartTime] = useState<Date | undefined>();
  const [isRunning, setIsRunning] = useState(false);
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  const startStopwatch = () => {
    setIsRunning(true);
    setStartTime(new Date());
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current);
    }
    setTimer(DEFAULT_TIMER);
  };

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    timerIdRef.current = setTimeout(() => {
      if (startTime) {
        setTimer({ ...calculateStopwatchTime(startTime) });
      }
    }, 10);

    return () =>
      timerIdRef.current ? clearTimeout(timerIdRef.current) : undefined;
  }, [isRunning, timer]);

  return (
    <div className={styles.mainContainer}>
      <div
        className={classNames(styles.timer, isRunning ? styles.active : "")}
      >{`${timer.hours}:${timer.minutes}:${timer.seconds}${timer.milliSeconds ? `.${timer.milliSeconds}` : ""}`}</div>
      <div className={styles.btnContainer}>
        <Button
          customStyles={[styles.btn]}
          isDisabled={isRunning}
          btnText="Start"
          onClick={startStopwatch}
        />
        <Button
          customStyles={[styles.btn]}
          isDisabled={!isRunning}
          btnText="Stop"
          onClick={stopStopwatch}
        />
        <Button
          customStyles={[styles.btn]}
          btnText="Reset"
          onClick={resetStopwatch}
        />
      </div>
    </div>
  );
}
