import { ChangeEvent } from "react";

type Props = {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function LabelInput({ label, value, onChange, name }: Props) {
  return (
    <main>
      <label htmlFor={name}>{label}</label>
      <input name={name} value={value} onChange={onChange} />
    </main>
  );
}
