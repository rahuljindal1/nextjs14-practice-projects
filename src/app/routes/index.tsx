"use client";

import styles from "./styles.module.css";
import { PROJECTS } from "./data";
import { KEY_NAMES, LocalForageService } from "../../../services";
import { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import { isArray } from "lodash";
import { Project } from "./interface";

const MAX_PINS = 3;

const localForageService = new LocalForageService();

const savedPinnedProjectIds =
  (localForageService.getItem(
    KEY_NAMES.PINNED_PROJECT_IDS
  ) as unknown as number[]) || [];

export default function Routes() {
  const [pinnedProjectIds, setPinnedProjectIds] = useState<number[]>(
    savedPinnedProjectIds
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pinToTop = (e: any, id: number) => {
    e.preventDefault();
    e.stopPropagation();

    if (pinnedProjectIds.length === 3 || pinnedProjectIds.includes(id)) {
      return;
    }

    const newPinnedProjectIds = [id, ...pinnedProjectIds];
    setPinnedProjectIds(newPinnedProjectIds);
    localForageService.setItem(
      KEY_NAMES.PINNED_PROJECT_IDS,
      newPinnedProjectIds
    );
  };

  const unPin = (e: any, id: number) => {
    e.preventDefault();
    e.stopPropagation();

    if (pinnedProjectIds.length === 0 || !pinnedProjectIds.includes(id)) {
      return;
    }

    const newPinnedProjectIds = pinnedProjectIds.filter(
      (pinnedId) => pinnedId !== id
    );
    setPinnedProjectIds(newPinnedProjectIds);
    localForageService.setItem(
      KEY_NAMES.PINNED_PROJECT_IDS,
      newPinnedProjectIds
    );
  };

  const isPinned = (projectId: number) =>
    pinnedProjectIds &&
    isArray(pinnedProjectIds) &&
    pinnedProjectIds.includes(projectId);

  const PinnedItems = () => {
    if (
      isLoading ||
      !pinnedProjectIds ||
      !isArray(pinnedProjectIds) ||
      pinnedProjectIds.length === 0
    ) {
      return <></>;
    }

    return (
      <div className={styles.projectList}>
        {pinnedProjectIds.map((id) => {
          const project = PROJECTS.find(
            (project) => project.id === id
          ) as Project;

          return (
            <ProjectItem
              isPinned
              key={project.id}
              project={project}
              pinToTop={pinToTop}
              unPin={unPin}
            />
          );
        })}
      </div>
    );
  };

  const ProjectItems = () => {
    if (isLoading) {
      return <></>;
    }

    const latestProjects = PROJECTS.toSorted((p1, p2) => p2.id - p1.id);
    return (
      <div className={styles.projectList}>
        {latestProjects.map(
          (project) =>
            !isPinned(project.id) && (
              <ProjectItem
                key={project.id}
                project={project}
                pinToTop={pinToTop}
                unPin={unPin}
                isMaxItemsPinned={pinnedProjectIds.length === MAX_PINS}
              />
            )
        )}
      </div>
    );
  };

  useEffect(() => {
    const loadPinnedProjectIds = async () => {
      const pinnedIds =
        ((await localForageService.getItem(
          KEY_NAMES.PINNED_PROJECT_IDS
        )) as unknown as number[]) || [];
      setIsLoading(false);
      setPinnedProjectIds(pinnedIds);
    };

    loadPinnedProjectIds();
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Next.js Projects</h1>
      <PinnedItems />
      <ProjectItems />
    </main>
  );
}
