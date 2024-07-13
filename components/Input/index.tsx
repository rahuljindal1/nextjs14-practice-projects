import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import styles from "./styles.module.css";
import classNames from "classnames";

type Props = {
  name: string;
  value?: string | number;
  customStyles?: string[];
  label?: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onEnter?: () => void;
};

export default function Input({
  label,
  value,
  onChange,
  name,
  customStyles = [],
  type = "text",
  onBlur = () => {},
  onEnter = () => {}
}: Props) {
  const Label = () => (label ? <label htmlFor={name}>{label}</label> : <></>);
  return (
    <main className={classNames(styles.mainContainer, customStyles)}>
      <Label />
      <input
        name={name}
        value={value}
        className={styles.input}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onEnter();
          }
        }}
      />
    </main>
  );
}
