import classNames from "classnames";
import styles from "./styles.module.css";

const blackDotIndexesPerNumber: { [key: string]: number[] } = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

export default function Dice({
  number,
  customStyles,
  size = "default",
}: {
  number: number;
  customStyles?: string[];
  size?: "default" | "small";
}) {
  const addShowDotClass = (index: number) => {
    if (blackDotIndexesPerNumber[number].includes(index)) {
      return styles.showDot;
    }
  };

  return (
    <div
      className={classNames(
        styles.container,
        size === "small" ? styles.smallContainer : ""
      )}
    >
      {Array(9)
        .fill(0)
        .map((val, index) => (
          <div
            className={classNames(
              styles.dot,
              customStyles,
              addShowDotClass(index)
            )}
            key={index}
          />
        ))}
    </div>
  );
}
