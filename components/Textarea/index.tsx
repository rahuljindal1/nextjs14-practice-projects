import classNames from "classnames";
import { ChangeEvent } from "react";
import styles from "./styles.module.css";

export default function Textarea({
  name,
  placeholder,
  onChange,
  customStyles = [],
  maxLength = Number.MAX_SAFE_INTEGER
}: {
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
  customStyles?: string[];
}) {
  return (
    <textarea
      className={classNames(styles.textArea, customStyles)}
      name={name}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
    />
  );
}
