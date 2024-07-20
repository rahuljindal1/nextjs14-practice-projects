"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import classNames from "classnames";
import { useState } from "react";
import styles from "./style.module.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Sidebar() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const Icon = ({
    styles,
    onClick
  }: {
    styles: string[];
    onClick: () => void;
  }) =>
    openDrawer ? (
      <IoIosCloseCircleOutline
        className={classNames(styles)}
        onClick={onClick}
      />
    ) : (
      <GiHamburgerMenu className={classNames(styles)} onClick={onClick} />
    );

  return (
    <div className={styles.mainContainer}>
      <div
        className={classNames(
          styles.sidebar,
          openDrawer === true && styles.sidebarOpen
        )}
      ></div>
      <div
        className={classNames(
          styles.mainSection,
          openDrawer === true && styles.mainSectionOnSidebarOpen
        )}
      >
        <Icon
          styles={[styles.hamburgerIcon]}
          onClick={() => setOpenDrawer((prevState) => !prevState)}
        />
      </div>
    </div>
  );
}
