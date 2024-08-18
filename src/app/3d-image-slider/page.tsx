import Image from "next/image";
import styles from "./styles.module.css";
import dragon1 from "./assets/dragon_1.jpg";
import dragon2 from "./assets/dragon_2.jpg";
import dragon3 from "./assets/dragon_3.jpg";
import dragon4 from "./assets/dragon_4.jpg";
import dragon5 from "./assets/dragon_5.jpg";
import dragon6 from "./assets/dragon_6.jpg";
import dragon7 from "./assets/dragon_7.jpg";
import dragon8 from "./assets/dragon_8.jpg";
import dragon9 from "./assets/dragon_9.jpg";
import dragon10 from "./assets/dragon_10.jpg";

export default function threeDImageSlider() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.banner}>
        <div
          className={styles.slider}
          style={{ "--quantity": 10 } as React.CSSProperties}
        >
          <div
            className={styles.item}
            style={{ "--position": 0 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon1}
              alt="dragon_1"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon2}
              alt="dragon_2"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon3}
              alt="dragon_3"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon4}
              alt="dragon_4"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon5}
              alt="dragon_5"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon6}
              alt="dragon_6"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon7}
              alt="dragon_7"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon8}
              alt="dragon_8"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 8 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon9}
              alt="dragon_9"
              height={250}
              width={250}
            />
          </div>
          <div
            className={styles.item}
            style={{ "--position": 9 } as React.CSSProperties}
          >
            <Image
              className={styles.image}
              src={dragon10}
              alt="dragon_10"
              height={250}
              width={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
