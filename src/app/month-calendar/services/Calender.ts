export class CalenderService {
  #WEEK_DAYS_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  public get weekDaysNames() {
    return this.#WEEK_DAYS_NAMES;
  }

  public get todayDisplayDate() {
    const today = new Date();
    const dayName = this.#WEEK_DAYS_NAMES[today.getDay() - 1];
    const shortMonth = today.toLocaleString("default", { month: "short" });
    const date = today.getDate();
    const year = today.getFullYear();

    return `${dayName} ${shortMonth} ${date} ${year}`;
  }

  public get getCurrentMonthDates() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const totalDays = this.getTotalDaysInCurrentMonth();
    const dates = Array(42).fill(0);

    const startDayIndex = new Date(year, month, 1).getDay() - 1;

    for (let i = startDayIndex; i < startDayIndex + totalDays; i++) {
      dates[i] = i - startDayIndex + 1;
    }

    return dates;
  }

  private getTotalDaysInCurrentMonth() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const nextMonthStart = new Date(year, month + 1, 1);
    const currentMonthStart = new Date(year, month, 1);

    return (
      (nextMonthStart.getTime() - currentMonthStart.getTime()) /
      (1000 * 60 * 60 * 24)
    );
  }
}
