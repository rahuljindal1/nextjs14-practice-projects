import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import styles from "./styles.module.css";
import classNames from "classnames";

export default function StepProgressBar({
  steps,
  currentStep
}: {
  steps: string[];
  currentStep: number;
}) {
  const Indicator = ({
    stepPosition,
    stepName
  }: {
    stepPosition: number;
    stepName: string;
  }) => {
    const StepIndicator =
      stepPosition <= currentStep ? (
        <FaCheck className={styles.activeStep} />
      ) : (
        <IoCloseSharp className={styles.notActiveStep} />
      );

    return (
      <div className={styles.stepIndicator}>
        {StepIndicator}
        <div className={styles.description}>{stepName}</div>
      </div>
    );
  };

  const Separator = ({ index }: { index: number }) => (
    <div
      className={classNames(
        styles.divider,
        index <= currentStep ? styles.active : 1
      )}
    />
  );

  const stepsArr: React.ReactNode[] = [];
  steps.forEach((step, index) => {
    stepsArr.push(<Indicator stepPosition={index} stepName={step} />);
    if (index !== steps.length - 1) {
      stepsArr.push(<Separator index={index} />);
    }
  });

  return <div className={styles.mainContainer}>{...stepsArr}</div>;
}
