import classNames from "classnames";
import classes from "./styles.module.css";

type Props = {
  btnText: string;
  onClick: () => void;
  isDisabled?: boolean;
  size?: "small" | "normal" | "large";
};

export default function Button({
  btnText,
  onClick,
  isDisabled = false,
  size = "normal",
}: Props) {
  return (
    <button
      className={classNames(
        classes.button,
        size === "large" ? classes.buttonLarge : ""
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
