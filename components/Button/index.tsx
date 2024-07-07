import classNames from "classnames";
import styles from "./styles.module.css";

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
        styles.button,
        size === "large" ? styles.buttonLarge : "",
        type == "secondary" ? styles.secondary : "",
        isDisabled ? styles.btnDisabled : ""
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}
