import classNames from "classnames";
import styles from "./styles.module.css";

type Props = {
  btnText?: string;
  btnIcon?: React.ReactNode;
  onClick: () => void;
  customStyles?: string[];
  iconStyles?: string[];
  isDisabled?: boolean;
  size?: "small" | "normal" | "large";
  type?: "primary" | "secondary";
  btnIconPosition?: "start" | "end";
};

export default function Button({
  btnText,
  btnIcon,
  onClick,
  customStyles = [],
  iconStyles = [],
  isDisabled = false,
  size = "normal",
  type = "primary",
  btnIconPosition = "start"
}: Props) {
  const ButtonIcon = () => {
    if (!btnIcon) {
      return <></>;
    }

    return (
      <div className={classNames(styles.btnIcon, iconStyles)}>{btnIcon}</div>
    );
  };

  const ButtonTxt = () => {
    if (!btnText) {
      return <></>;
    }

    return <div className={styles.btnText}>{btnText}</div>;
  };

  return (
    <div
      className={classNames(
        styles.button,
        size === "large" ? styles.buttonLarge : "",
        type == "secondary" ? styles.secondary : "",
        isDisabled ? styles.btnDisabled : "",
        customStyles
      )}
      onClick={onClick}
    >
      {btnIconPosition === "start" && <ButtonIcon />}
      <ButtonTxt />
      {btnIconPosition === "end" && <ButtonIcon />}
    </div>
  );
}
