"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const MAX_PROGRESS = 100;
const PROGRESS_DURATION_IN_MILLISECONDS = 1500;

export default function LoadingBar() {
  const [progress, setProgress] = useState<number>(0);

  const handleProgress = (currentProgress = 0) => {
    const timer = Math.floor(PROGRESS_DURATION_IN_MILLISECONDS / MAX_PROGRESS);
    setTimeout(() => {
      const newProgress = currentProgress + 1;
      if (currentProgress !== MAX_PROGRESS) {
        setProgress(newProgress);
        handleProgress(newProgress);
      }
    }, timer);
  };

  useEffect(() => {
    handleProgress();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div>Loading</div>
      <div className={styles.loaderContainer}>
        {progress}%
        <div className={styles.loader}>
          <div className={styles.loaderOverlay}></div>
        </div>
      </div>
    </div>
  );
}
