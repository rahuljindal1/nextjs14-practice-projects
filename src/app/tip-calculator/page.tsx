"use client";

import { useState, ChangeEvent } from "react";
import Card from "../../../components/Card";
import Button from "./components/Button";
import LabelInput from "./components/LabelInput";
import classes from "./styles.module.css";

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
    <div className={classes.mainContainer}>
      <Card>
        <div className={classes.title}>Tip Calculator</div>
        <div className={classes.description}>
          Enter the bill amount and tip percentage to calculate the total.
        </div>
        <LabelInput
          label="Bill Amount:"
          name="billAmount"
          value={billAmount}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBillAmount(e.target.value)
          }
        />
        <LabelInput
          label="Tip Percentage:"
          name="tipPercentage"
          value={tipPercentage}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTipPercentage(e.target.value)
          }
        />
        <Button btnText="CALCULATE" onClick={calculateTotalAmount} />
        <div>
          Total: <span className={classes.total}>{totalAmount}</span>
        </div>
      </Card>
    </div>
  );
}
