"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { useState } from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

type AnimationStyle = {
  animation?: string;
};

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

const AnimatedContainer = styled.div<{
  animationDurationInMilliseconds: number;
}>`
  ${({ animationDurationInMilliseconds: animateDurationInMilliseconds }) =>
    animateDurationInMilliseconds
      ? css`
          animation: ${rotateDiceAnimation}
            ${animateDurationInMilliseconds / 1000}s ease-in-out;
        `
      : ""}
`;

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
  animate,
  size = "default",
}: {
  number: number;
  customStyles?: string[];
  size?: "default" | "small";
  animate?: AnimateConfig;
}) {
  const [animationStyle, setAnimationStyle] = useState<
    AnimationStyle | undefined
  >(
    animate
      ? {
          animation: `rotateDice ${animate.durationInMilliSeconds / 1000}s forwards`,
        }
      : {}
  );

  const addShowDotClass = (index: number) => {
    if (blackDotIndexesPerNumber[number].includes(index)) {
      return styles.showDot;
    }
  };

  if (animate && animationStyle?.animation) {
    setTimeout(() => setAnimationStyle({}), animate.durationInMilliSeconds);
  }

  return (
    <AnimatedContainer
      className={classNames(
        styles.container,
        size === "small" ? styles.smallContainer : ""
      )}
      animationDurationInMilliseconds={animate?.durationInMilliSeconds || 0}
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
    </AnimatedContainer>
  );
}
