"use client";

import { FaApple, FaBriefcase, FaCloud } from "react-icons/fa";
import styles from "./style.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const COUNTER_DURATION_IN_MILLISECONDS = 2000;
const WEBSITE_MADE = 247;
const APPS_MADE = 45;
const YEARS_OF_EXPERIENCE = 15;

export default function ProfileStatistics() {
  const [websitesCounter, setWebsitesCounter] = useState(0);
  const [yearsOfExperienceCounter, setYearsOfExperienceCounter] = useState(0);
  const [appsMadeCounter, setAppsMadeCounter] = useState(0);

  const counter = (
    statValue: number,
    setter: Dispatch<SetStateAction<number>>,
    current = 0
  ) => {
    const timer = Math.floor(COUNTER_DURATION_IN_MILLISECONDS / statValue);
    setTimeout(() => {
      if (current < statValue) {
        const updatedVal = ++current;
        setter(updatedVal);
        counter(statValue, setter, updatedVal);
      }
    }, timer);
  };

  useEffect(() => {
    counter(
      YEARS_OF_EXPERIENCE,
      setYearsOfExperienceCounter,
      yearsOfExperienceCounter
    );
    counter(WEBSITE_MADE, setWebsitesCounter, websitesCounter);
    counter(APPS_MADE, setAppsMadeCounter, appsMadeCounter);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.profileContainer}>
        <FaBriefcase className={styles.icon} />
        <div className={styles.stats}>{yearsOfExperienceCounter}</div>
        <div className={styles.statTitle}>Years of Experience</div>
      </div>
      <div className={styles.profileContainer}>
        <FaCloud className={styles.icon} />
        <div className={styles.stats}>{websitesCounter}</div>
        <div className={styles.statTitle}>Websites Made</div>
      </div>
      <div className={styles.profileContainer}>
        <FaApple className={styles.icon} />
        <div className={styles.stats}>{appsMadeCounter}</div>
        <div className={styles.statTitle}>Apps Made</div>
      </div>
    </div>
  );
}
