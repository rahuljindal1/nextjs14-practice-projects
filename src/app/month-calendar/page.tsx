"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import { CalenderService } from "./services";

const calenderService = new CalenderService();

export default function MonthCalendar() {
  const currentDate = new Date();
  const allDates = calenderService.getCurrentMonthDates;
  const currentLongMonth = currentDate.toLocaleString("default", {
    month: "long"
  });
  const todayDate = currentDate.getDate();

  const Month = () => (
    <div className={styles.month}>
      <div className={styles.monthName}>{currentLongMonth.toUpperCase()}</div>
      <div>{calenderService.todayDisplayDate}</div>
    </div>
  );

  const WeekDaysGrid = () => (
    <div className={styles.weekDaysGridContainer}>
      {calenderService.weekDaysNames.map((day, index) => (
        <div className={styles.weekDaysGridItem} key={index}>
          {day}
        </div>
      ))}
    </div>
  );

  const MonthDaysGrid = () => (
    <div className={styles.daysGridContainer}>
      {allDates.map((date, index) => (
        <div
          className={classNames(
            styles.dayGridItem,
            date === todayDate ? styles.highlightCurrentDate : ""
          )}
          key={index}
        >
          {date !== 0 ? date : ""}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.mainContainer}>
      <div className={styles.calender}>
        <Month />
        <WeekDaysGrid />
        <MonthDaysGrid />
      </div>
    </div>
  );
}
