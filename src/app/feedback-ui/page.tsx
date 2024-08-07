"use client";

import { useState } from "react";
import { Button } from "../../../components";
import styles from "./styles.module.css";
import Image from "next/image";
import classNames from "classnames";

const feedbacks = [
  {
    emojiImage: "https://cdn-icons-png.flaticon.com/512/166/166527.png",
    title: "Unhappy"
  },
  {
    emojiImage: "https://cdn-icons-png.flaticon.com/512/1791/1791385.png",
    title: "Neutral"
  },
  {
    emojiImage: "https://cdn-icons-png.flaticon.com/512/166/166538.png",
    title: "Satisfied"
  }
];

export default function FeedbackUI() {
  const [selectedFeedback, setSelectedFeedback] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const AfterSubmitView = () => (
    <div className={styles.feedbackSubmitContainer}>
      <div>
        <b>Thank You!</b>
      </div>
      <div>
        <b>Feedback: {selectedFeedback}</b>
      </div>
      <div className={styles.thankMessage}>
        {"We'll use your feedback to improve our customer support."}
      </div>
    </div>
  );

  const BeforeSubmitView = () => (
    <>
      <div className={styles.title}>Feedback UI</div>
      <div className={styles.feedbackContainer}>
        {feedbacks.map((feedback, index) => (
          <div
            onClick={() => setSelectedFeedback(feedback.title)}
            className={classNames(
              styles.feedbackWrapper,
              feedback.title === selectedFeedback ? styles.selectedFeedback : ""
            )}
            key={index}
          >
            <Image
              className={styles.feedbackEmoji}
              src={feedback.emojiImage}
              alt={feedback.title}
              height={40}
              width={40}
            />
            <div className={styles.feedbackTitle}>{feedback.title}</div>
          </div>
        ))}
      </div>
      <Button
        customStyles={[styles.btn]}
        isDisabled={!selectedFeedback}
        btnText="Send Review"
        onClick={() => {
          setIsSubmitted(true);
        }}
      />
    </>
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.feedbackCard}>
        {isSubmitted && <AfterSubmitView />}
        {!isSubmitted && <BeforeSubmitView />}
      </div>
    </div>
  );
}
