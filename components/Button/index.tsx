import classNames from "classnames";
import classes from "./styles.module.css";

type Props = {
  btnText: string;
  onClick: () => void;
  isDisabled?: boolean;
  size?: "small" | "normal" | "large";
  type?: "primary" | "secondary";
};

export default function Button({
  btnText,
  onClick,
  isDisabled = false,
  size = "normal",
  type = "primary",
}: Props) {
  return (
    <button
      className={classNames(
        classes.button,
        size === "large" ? classes.buttonLarge : "",
        type == "secondary" ? classes.secondary : ""
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
