import styles from "./styles.module.css";
import { Separator, Indicator } from "./components";

export default function StepProgressBar({
  steps,
  currentStep
}: {
  steps: string[];
  currentStep: number;
}) {
  const stepsArr: React.ReactNode[] = [];
  steps.forEach((step, index) => {
    stepsArr.push(
      <Indicator
        stepPosition={index}
        stepName={step}
        currentStep={currentStep}
      />
    );
    if (index !== steps.length - 1) {
      stepsArr.push(<Separator index={index} currentStep={currentStep} />);
    }
  });

  return <div className={styles.mainContainer}>{...stepsArr}</div>;
}
