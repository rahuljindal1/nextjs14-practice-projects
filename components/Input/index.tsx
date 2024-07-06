import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import classes from "./styles.module.css";
import classNames from "classnames";

type Props = {
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  customStyles?: string[];
  label?: string;
  type?: HTMLInputTypeAttribute;
};

export default function Input({
  label,
  value,
  onChange,
  name,
  customStyles = [],
  type = "text",
}: Props) {
  const Label = () => (label ? <label htmlFor={name}>{label}</label> : <></>);
  return (
    <main className={classNames(classes.mainContainer, customStyles)}>
      <Label />
      <input
        name={name}
        value={value}
        onChange={onChange}
        className={classes.input}
        type={type}
      />
    </main>
  );
}
