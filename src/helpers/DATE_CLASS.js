import { DateTime } from "luxon";

export class DATE_CLASS {
  constructor(day, month, year) {
    this.setDateTime(day, month, year);
    this.setWeekNumber();
    this.setDateAndDayOfTheWeek();
    this.setYearNumber();
    this.setWeekRange();
  }

  setDateTime(day, month, year) {
    this.dateTime = DateTime.fromObject({ year: year, month: month, day: day });
  }

  getDateTime() {
    return this.dateTime;
  }

  setWeekNumber() {
    this.weekNumber = this.dateTime.weekNumber;
  }

  getWeekNumber() {
    return this.weekNumber;
  }

  setDateAndDayOfTheWeek() {
    this.dateAndDayOfTheWeek = this.dateTime.toLocaleString({
      month: "short",
      day: "numeric",
      weekday: "long",
    });
  }

  getDateAndDayOfTheWeek() {
    return this.dateAndDayOfTheWeek;
  }

  setYearNumber() {
    this.yearNumber = this.dateTime.year;
  }

  getYearNumber() {
    return this.yearNumber;
  }

  setWeekRange() {
    const dt = DateTime.fromObject({
      weekYear: this.getYearNumber(),
      weekNumber: this.getWeekNumber(),
    });

    const startOfWeek = dt.startOf("week");
    const endOfWeek = dt.endOf("week");

    this.weekRange = { startOfWeek, endOfWeek };
  }

  getWeekRange() {
    return this.weekRange;
  }

  setWeekDatesTime() {
    const weekDates = [];

    for (let i = 0; i < 7; i++) {
      weekDates[i] = this.weekRange.startOfWeek.plus({ hours: 24 * i });
    }

    this.weekDates = weekDates;
    return this.weekDates;
  }

  getWeekDatesTime() {
    this.setWeekDatesTime();
    return this.weekDates;
  }

  weekDatesStringFormatted() {
    this.setWeekDatesTime();
    const weekDatesString = this.weekDates.map((datetime) => {
      const weekday = datetime.weekdayLong;
      const month = datetime.monthShort;
      const day = datetime.day.toString();
      return { weekday, month, day };
    });

    return weekDatesString;
  }

  weekDatesArray() {
    this.setWeekDatesTime();
    const weekDatesArray = this.getWeekDatesTime();
    return weekDatesArray;
  }
}

export function DATE_CLASS_NOW() {
  const dt = DateTime.now();

  const dateTimeNow = new DATE_CLASS(dt.day, dt.month, dt.year);
  console.log(dateTimeNow);
  return dateTimeNow;
}