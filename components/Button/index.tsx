import classes from "./styles.module.css";

type Props = {
  btnText: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export default function Button({
  btnText,
  onClick,
  isDisabled = false,
}: Props) {
  return (
    <button className={classes.button} disabled={isDisabled} onClick={onClick}>
      {btnText}
    </button>
  );
}
