"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

type AnimateConfig = {
  durationInMilliSeconds: number;
};

const rotateDiceAnimation = keyframes`
  0% {
    transform: rotate3d(1, 1, 0, 0deg);
  }
  50% {
    transform: rotate3d(1, 1, 0, 180deg);
  }
  100% {
    transform: rotate3d(1, 1, 0, 360deg);
  }
`;

const AnimateContainer = styled.div<{
  animationDurationInSeconds: number;
}>`
  ${({ animationDurationInSeconds }) =>
    animationDurationInSeconds
      ? css`
          animation: ${rotateDiceAnimation} ${animationDurationInSeconds}s
            forwards;
        `
      : ""}
`;

const dotVisibilityIndexMap: { [key: string]: number[] } = {
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
  animate,
  size = "default",
}: {
  number: number;
  customStyles?: string[];
  size?: "default" | "small";
  animate?: AnimateConfig;
}) {
  const addShowDotClass = (index: number) => {
    if (dotVisibilityIndexMap[number].includes(index)) {
      return styles.showDot;
    }
  };

  return (
    <AnimateContainer
      className={classNames(
        styles.container,
        size === "small" ? styles.smallContainer : ""
      )}
      animationDurationInSeconds={
        animate?.durationInMilliSeconds
          ? animate?.durationInMilliSeconds / 1000
          : 0
      }
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
    </AnimateContainer>
  );
}
