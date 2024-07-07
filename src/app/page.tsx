import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ul className={styles.projectList}>
        <li className={styles.projectListItem}>
          <Link href="/testimonial">Testimonial Slider</Link>
        </li>
        <li className={styles.projectListItem}>
          <Link href="/tip-calculator">Tip Calculator</Link>
        </li>
        <li className={styles.projectListItem}>
          <Link href="/age-calculator">Age Calculator</Link>
        </li>
        <li className={styles.projectListItem}>
          <Link href="/dice-roll-simulator">Dice Roll Simulator</Link>
        </li>
      </ul>
    </main>
  );
}
