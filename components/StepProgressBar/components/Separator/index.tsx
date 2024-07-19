"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

export default function Separator({
  index,
  currentStep
}: {
  index: number;
  currentStep: number;
}) {
  const [previousStep, setPreviousStep] = useState<number>(0);
  const previousStepRef = useRef<number>();

  useEffect(() => {
    setPreviousStep(
      previousStepRef.current === undefined ? 0 : previousStepRef.current
    );
    previousStepRef.current = currentStep;
  }, [currentStep]);

  const showForwardAnimation = currentStep !== 0 && index < currentStep;
  const showBackwardAnimation =
    previousStep > currentStep && index === previousStep - 1;
  return (
    <div className={classNames(styles.divider)}>
      {showForwardAnimation && (
        <div className={styles.dividerOverlayForward}></div>
      )}
      {showBackwardAnimation && (
        <div className={styles.dividerOverlayBackward}></div>
      )}
    </div>
  );
}
