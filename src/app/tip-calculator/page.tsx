"use client";

import { useState, ChangeEvent } from "react";
import styles from "./styles.module.css";
import { Button, Card, Input } from "../../../components";

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState<string>("");
  const [tipPercentage, setTipPercentage] = useState<string>("");
  const [totalAmount, setTotalAmount] = useState<string>("0.00");

  const calculateTotalAmount = () => {
    const billAmountInNum = Number(billAmount);
    let tipPercentageInNum = Number(tipPercentage);

    if (Number.isNaN(billAmountInNum)) {
      setTotalAmount("0.00");
      return;
    }
    if (Number.isNaN(tipPercentage)) {
      tipPercentageInNum = 0;
    }

    const amount =
      billAmountInNum + (billAmountInNum * tipPercentageInNum) / 100;
    setTotalAmount(amount.toFixed(2));
  };

  return (
    <div className={styles.mainContainer}>
      <Card>
        <div className={styles.title}>Tip Calculator</div>
        <div className={styles.description}>
          Enter the bill amount and tip percentage to calculate the total.
        </div>
        <Input
          label="Bill Amount:"
          name="billAmount"
          value={billAmount}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBillAmount(e.target.value)
          }
        />
        <Input
          label="Tip Percentage:"
          name="tipPercentage"
          value={tipPercentage}
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTipPercentage(e.target.value)
          }
        />
        <Button btnText="CALCULATE" onClick={calculateTotalAmount} />
        <div>
          Total: <span className={styles.total}>{totalAmount}</span>
        </div>
      </Card>
    </div>
  );
}
