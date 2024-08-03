"use client";

import Link from "next/link";
import styles from "./styles.module.css";
import { PROJECTS } from "./data";
import { LuPin, LuPinOff } from "react-icons/lu";
import { Tooltip } from "../../../components";
import { KEY_NAMES, LocalForageService } from "../../../services";
import { useEffect, useState } from "react";

const localForageService = new LocalForageService();

const savedPinnedProjectIds =
  (localForageService.getItem(
    KEY_NAMES.PINNED_PROJECT_IDS
  ) as unknown as number[]) || [];

export default function Routes() {
  const [pinnedProjectIds, setPinnedProjectIds] = useState<number[]>(
    savedPinnedProjectIds
  );

  const pinToTop = (e: any, id: number) => {
    e.preventDefault();
    e.stopPropagation();

    if (pinnedProjectIds.length === 3) {
      return;
    }
    if (pinnedProjectIds.includes(id)) {
      return;
    }

    const newPinnedProjectIds = [id, ...pinnedProjectIds];
    setPinnedProjectIds(newPinnedProjectIds);
    localForageService.setItem(
      KEY_NAMES.PINNED_PROJECT_IDS,
      newPinnedProjectIds
    );
  };

  useEffect(() => {
    const loadPinnedProjectIds = async () => {
      const pinnedIds =
        ((await localForageService.getItem(
          KEY_NAMES.PINNED_PROJECT_IDS
        )) as unknown as number[]) || [];
      setPinnedProjectIds(pinnedIds);
    };

    loadPinnedProjectIds();
  }, []);

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
              <Tooltip text="Pin To Top">
                {<LuPin onClick={(e) => pinToTop(e, project.id)} />}
              </Tooltip>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
