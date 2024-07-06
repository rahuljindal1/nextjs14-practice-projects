import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import classes from "./styles.module.css";

type Props = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
};

export default function LabelInput({
  label,
  value,
  onChange,
  name,
  type = "text",
}: Props) {
  return (
    <main className={classes.mainContainer}>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={classes.input}
        type="number"
      />
    </main>
  );
}
