import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function Indicator({
  stepPosition,
  stepName,
  currentStep
}: {
  stepPosition: number;
  stepName: string;
  currentStep: number;
}) {
  const StepIndicator =
    stepPosition <= currentStep ? (
      <FaCheck
        className={classNames(
          styles.activeState,
          stepPosition === 0
            ? styles.nonAnimatedActiveState
            : styles.animateActiveState
        )}
      />
    ) : (
      <IoCloseSharp className={styles.notActiveStep} />
    );

  return (
    <div className={styles.stepIndicator}>
      {StepIndicator}
      <div className={styles.description}>{stepName}</div>
    </div>
  );
}
