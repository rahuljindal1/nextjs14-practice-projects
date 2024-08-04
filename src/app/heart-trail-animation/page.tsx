"use client";

import styles from "./styles.module.css";

export default function HeartTrailAnimation() {
  const mouseMoveHandler = (e: any) => {
    const parent = document.getElementById("heart");

    const xPos = e.clientX;
    const yPos = e.clientY;
    const spanEl = document.createElement("span");
    spanEl.classList.add(styles.heart);
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    parent?.appendChild(spanEl);
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  };

  return (
    <div
      id="heart"
      onMouseMove={mouseMoveHandler}
      className={styles.mainContainer}
    ></div>
  );
}
