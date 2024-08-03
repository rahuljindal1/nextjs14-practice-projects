import { useState } from "react";
import styles from "./styles.module.css";

const Tooltip = ({
  text,
  children
}: {
  text: string;
  children: Readonly<React.ReactNode>;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.tooltipContainer}>
      <div
        className={styles.tooltipTarget}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </div>
      {visible && <div className={styles.tooltip}>{text}</div>}
    </div>
  );
};

export default Tooltip;
