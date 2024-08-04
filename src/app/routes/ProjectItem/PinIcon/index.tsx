import classNames from "classnames";
import { LuPinOff, LuPin } from "react-icons/lu";
import { Tooltip } from "../../../../../components";
import iconStyles from "../icon.module.css";
import { Project } from "../../interface";

export default function PinIcon({
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
  if (isPinned) {
    return (
      <Tooltip text="Un Pin">
        {
          <LuPinOff
            className={iconStyles.icon}
            onClick={(e) => unPin(e, project.id)}
          />
        }
      </Tooltip>
    );
  }

  const toolTipText = isMaxItemsPinned
    ? "Maximum 3 Projects can be Pinned"
    : "Pin To Top";

  return (
    <Tooltip text={toolTipText}>
      {
        <LuPin
          className={classNames(
            iconStyles.icon,
            isMaxItemsPinned ? iconStyles.markIconDisabled : ""
          )}
          onClick={(e) => pinToTop(e, project.id)}
        />
      }
    </Tooltip>
  );
}
