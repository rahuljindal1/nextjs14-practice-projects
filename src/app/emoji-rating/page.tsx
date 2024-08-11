"use client";

import {
  FaRegAngry,
  FaRegFrown,
  FaRegLaugh,
  FaRegMeh,
  FaRegSmile,
  FaRegStar,
  FaStar
} from "react-icons/fa";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useState } from "react";

export default function EmojiRating() {
  const [rating, setRating] = useState<number>(1);

  const Rating = ({ active, index }: { active: boolean; index: number }) => {
    return (
      <FaStar
        onClick={() => setRating(index + 1)}
        className={classNames(styles.rating, active ? styles.activeRating : "")}
      />
    );
  };

  const slideTransformer = {
    transform: `translateY(${-52 * (rating > 0 ? rating - 1 : 0)}px)`
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.card}>
        <div className={styles.emojiWrapper}>
          <FaRegAngry
            style={slideTransformer}
            className={classNames(styles.emoji, styles.angryEmoji)}
          />
          <FaRegFrown
            style={slideTransformer}
            className={classNames(styles.emoji, styles.angryFrown)}
          />
          <FaRegMeh
            style={slideTransformer}
            className={classNames(styles.emoji, styles.angryMeh)}
          />
          <FaRegSmile
            style={slideTransformer}
            className={classNames(styles.emoji, styles.angrySmile)}
          />
          <FaRegLaugh
            style={slideTransformer}
            className={classNames(styles.emoji, styles.angryLaugh)}
          />
        </div>
        <div className={styles.ratingContainer}>
          {Array(5)
            .fill(0)
            .map((value, index) => (
              <Rating key={index} active={index < rating} index={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
