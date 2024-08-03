import styles from "./styles.module.css";

export default function MiniCalender() {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const date = currentDate.getDate();
  const day = currentDate.toLocaleString("default", { weekday: "long" });

  return (
    <div className={styles.mainContainer}>
      <div className={styles.calender}>
        <div className={styles.month}>{month}</div>
        <div className={styles.dayContainer}>
          <div>{day}</div>
          <div className={styles.date}>{date}</div>
          <div>{year}</div>
        </div>
      </div>
    </div>
  );
}
