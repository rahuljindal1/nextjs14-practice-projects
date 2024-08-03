import Link from "next/link";
import { LuPin, LuPinOff } from "react-icons/lu";
import { Tooltip } from "../../../../components";
import { Project } from "../interface";
import styles from "./styles.module.css";

export default function ProjectItem({
  project,
  isPinned,
  pinToTop,
  unPin
}: {
  project: Project;
  isPinned?: boolean;
  pinToTop(e: any, id: number): void;
  unPin(e: any, id: number): void;
}) {
  const PinIcon = () => {
    if (isPinned) {
      return (
        <Tooltip text="Un Pin">
          {
            <LuPinOff
              className={styles.icon}
              onClick={(e) => unPin(e, project.id)}
            />
          }
        </Tooltip>
      );
    }

    return (
      <Tooltip text="Pin To Top">
        {
          <LuPin
            className={styles.icon}
            onClick={(e) => pinToTop(e, project.id)}
          />
        }
      </Tooltip>
    );
  };

  return (
    <Link
      key={project.id}
      className={styles.projectListItem}
      href={project.link}
    >
      <div className={styles.itemInfoContainer}>
        <div className={styles.itemCount}>{project.id}</div>
        <div className={styles.itemText}>{project.title}</div>
      </div>
      <div className={styles.actionIcon}>
        <PinIcon />
      </div>
    </Link>
  );
}
