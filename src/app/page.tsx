import Link from "next/link";
import styles from "./page.module.css";

const projects = [
  { id: 1, title: "Testimonial Slider", link: "/testimonial" },
  { id: 2, title: "Tip Calculator", link: "/tip-calculator" },
  { id: 3, title: "Age Calculator", link: "/age-calculator" },
  { id: 4, title: "Dice Roll Simulator", link: "/dice-roll-simulator" },
  { id: 5, title: "Pomodoro Timer", link: "/pomodoro-timer" },
  { id: 5, title: "Rock Paper Scissors Game", link: "/rock-paper-scissors" }
];

export default function Home() {
  return (
    <main className={styles.main}>
      <ol className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projectListItem}>
            <Link href={project.link}>{project.title}</Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
