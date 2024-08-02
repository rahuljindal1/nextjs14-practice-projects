export class CalenderService {
  #WEEK_DAYS_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  public get weekDaysNames() {
    return this.#WEEK_DAYS_NAMES;
  }

  public get todayDisplayDate() {
    const currentDate = new Date();
    const currentShortMonth = currentDate.toLocaleString("default", {
      month: "short"
    });
    const todayDate = currentDate.getDate();
    const currentYear = currentDate.getFullYear();
    const todayDay = this.#WEEK_DAYS_NAMES[currentDate.getDay() - 1];

    return `${todayDay} ${currentShortMonth} ${todayDate} ${currentYear}`;
  }

  public get getCurrentMonthDates() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const totalDaysInCurrentMonth = this.getTotalDaysInCurrentMonth();
    const allPossibleDates = Array(42).fill(0);

    const startDate = new Date(currentYear, currentMonth, 1);
    const startDayIndex = startDate.getDay();
    for (let i = startDayIndex - 1; i <= totalDaysInCurrentMonth; i++) {
      allPossibleDates[i] = i - startDayIndex + 2;
    }

    return allPossibleDates;
  }

  private getTotalDaysInCurrentMonth() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const nextMonthStartDate = new Date(currentYear, currentMonth + 1, 1);
    const currentMonthStartDate = new Date(currentYear, currentMonth, 1);
    const numberOfDays =
      (nextMonthStartDate.getTime() - currentMonthStartDate.getTime()) /
      (1000 * 60 * 60 * 24);
    return numberOfDays;
  }
}
