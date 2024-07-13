import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import styles from "./styles.module.css";

export default function VideoPopover({
  show = false,
  onClose = () => {}
}: {
  show?: boolean;
  onClose?: () => void;
}) {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose();
  };

  const Popover = () => (
    <div className={styles.mainContainer} onClick={handleBackgroundClick}>
      <IoIosCloseCircleOutline className={styles.closeIcon} onClick={onClose} />
      <div className={styles.wrapper}>
        <iframe
          width="800"
          height="600"
          src=""
          title="Video Popover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );

  if (show) {
    return createPortal(
      <Popover />,
      document.querySelector("body") as unknown as DocumentFragment
    );
  }

  return <></>;
}
