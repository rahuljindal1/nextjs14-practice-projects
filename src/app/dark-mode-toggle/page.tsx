"use client";

import { useEffect, useState } from "react";
import { KEY_NAMES, LocalForageService } from "../../../services";
import styles from "./styles.module.css";
import classNames from "classnames";

enum THEME {
  LIGHT = "LIGHT",
  DARK = "DARK"
}

const localForage = new LocalForageService();

export default function DarkModeToggle() {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const isDarkTheme = theme === THEME.DARK;

  const themeChangeHandler = async () => {
    const newTheme = isDarkTheme ? THEME.LIGHT : THEME.DARK;
    setTheme(newTheme);
    await localForage.setItem(KEY_NAMES.THEME, newTheme);
  };

  useEffect(() => {
    const init = async () => {
      const theme = await localForage.getItem(KEY_NAMES.THEME);
      if (!theme) {
        setTheme(THEME.LIGHT);
        return;
      }
      setTheme(theme as unknown as THEME);
    };

    init();
  }, []);

  return (
    <div
      className={classNames(
        styles.mainContainer,
        isDarkTheme ? styles.darkMode : ""
      )}
    >
      <input
        className={styles.checkbox}
        onClick={themeChangeHandler}
        type="checkbox"
        id="theme"
      />
      <label className={styles.checkboxLabel} htmlFor="theme">
        <div className={styles.circle}></div>
      </label>
    </div>
  );
}
