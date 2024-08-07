"use client";

import { Tooltip } from "../../../../components";
import { Project } from "../interface";
import styles from "./styles.module.css";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { useRouter } from "next/navigation";
import iconStyles from "./icon.module.css";
import PinIcon from "./PinIcon";

export default function ProjectItem({
  project,
  isPinned,
  pinToTop,
  unPin,
  isMaxItemsPinned
}: {
  project: Project;
  isPinned?: boolean;
  pinToTop(e: any, id: number): void;
  unPin(e: any, id: number): void;
  isMaxItemsPinned?: boolean;
}) {
  const router = useRouter();
  const [showActionOverlay, setShowActionOverlay] = useState<boolean>(false);

  const visitLink = (url: string) => {
    router.push(url);
  };

  const ActionOverlay = ({ project }: { project: Project }) => {
    if (!showActionOverlay) {
      return <></>;
    }

    return (
      <div className={styles.actionOverlay}>
        <div className={styles.actionIcon}>
          <Tooltip text="Visit Link">
            <FaLink
              onClick={() => {
                visitLink(project.link);
              }}
              className={iconStyles.icon}
            />
          </Tooltip>
        </div>
        <div className={styles.actionIcon}>
          <PinIcon
            project={project}
            isPinned={isPinned}
            pinToTop={pinToTop}
            unPin={unPin}
            isMaxItemsPinned={isMaxItemsPinned}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      onMouseOver={() => setShowActionOverlay(true)}
      onMouseLeave={() => setShowActionOverlay(false)}
      key={project.id}
      className={styles.projectListItem}
    >
      <div className={styles.itemInfoContainer}>
        <div className={styles.itemCount}>{project.id}</div>
        <div className={styles.itemText}>{project.title}</div>
      </div>
      <ActionOverlay project={project} />
    </div>
  );
}
