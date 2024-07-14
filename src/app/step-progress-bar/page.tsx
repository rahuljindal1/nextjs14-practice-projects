"use client";

import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import { Button, StepProgressBar } from "../../../components";
import styles from "./styles.module.css";
import { useState } from "react";

export default function StepProgressBarView() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Step 1 ", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"];

  return (
    <div className={styles.mainContainer}>
      <StepProgressBar steps={steps} currentStep={currentStep} />
      <div className={styles.controls}>
        <Button
          btnIcon={<IoArrowBackSharp />}
          isDisabled={currentStep === 0}
          onClick={() => setCurrentStep((prevState) => prevState - 1)}
        />
        <Button
          btnIcon={<IoArrowForwardSharp />}
          btnIconPosition="end"
          isDisabled={currentStep === steps.length - 1}
          onClick={() => setCurrentStep((prevState) => prevState + 1)}
        />
      </div>
    </div>
  );
}
