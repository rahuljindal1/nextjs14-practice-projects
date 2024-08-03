"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { PROJECTS } from "./data";
import { LuPin, LuPinOff } from "react-icons/lu";
import { Tooltip } from "../../../components";

export default function Routes() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js Projects</h1>
      <div className={styles.projectList}>
        {PROJECTS.map((project, index) => (
          <Link
            key={project.id}
            className={styles.projectListItem}
            href={project.link}
          >
            <div className={styles.itemInfoContainer}>
              <div className={styles.itemCount}>{index + 1}</div>
              <div className={styles.itemText}>{project.title}</div>
            </div>
            <div className={styles.actionIcon}>
              <Tooltip text="Pin To Top">{<LuPin />}</Tooltip>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
