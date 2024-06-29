"use client";

import { ChangeEvent, useState } from "react";
import Button from "../Button";
import LabelInput from "../LabelInput";

export default function TipCalculatorCard() {
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
    <main>
      <div>Tip Calculator</div>
      <div>
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
        label="Tip Percentage"
        name="tipPercentage"
        value={tipPercentage}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTipPercentage(e.target.value)
        }
      />
      <Button btnText="CALCULATE" onClick={calculateTotalAmount} />
      <div>
        Total: <span>{totalAmount}</span>
      </div>
    </main>
  );
}
