import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <main className={classes.main}>
      <ul className={classes.projectList}>
        <li className={classes.projectListItem}>
          <Link href="/testimonial">Testimonial Slider</Link>
        </li>
        <li className={classes.projectListItem}>
          <Link href="/tip-calculator">Tip Calculator</Link>
        </li>
      </ul>
    </main>
  );
}
