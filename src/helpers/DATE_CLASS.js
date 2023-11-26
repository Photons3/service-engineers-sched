import { DateTime } from "luxon";

export class DATE_CLASS_NOW {
  constructor() {
    this.setDateTimeNow();
    this.setWeekNumberNow();
    this.setDateAndDayOfTheWeekNow();
    this.setYearNumberNow();
    this.setWeekRangeNow();
  }

  setDateTimeNow() {
    this.dateTime = DateTime.now();
  }

  getDateTimeNow() {
    return this.dateTime;
  }

  setWeekNumberNow() {
    this.weekNumberNow = this.dateTime.weekNumber;
  }

  getWeekNumberNow() {
    return this.weekNumberNow;
  }

  setDateAndDayOfTheWeekNow() {
    this.dateAndDayOfTheWeekNow = this.dateTime.toLocaleString({
      month: "short",
      day: "numeric",
      weekday: "long",
    });
  }

  getDateAndDayOfTheWeekNow() {
    return this.dateAndDayOfTheWeekNow;
  }

  setYearNumberNow() {
    this.yearNumberNow = this.dateTime.year;
  }

  getYearNumberNow() {
    return this.yearNumberNow;
  }

  setWeekRangeNow() {
    const dt = DateTime.fromObject({
      weekYear: this.getYearNumberNow(),
      weekNumber: this.getWeekNumberNow(),
    });

    const startOfWeek = dt.startOf("week");
    const endOfWeek = dt.endOf("week");

    this.weekRangeNow = { startOfWeek, endOfWeek };
  }

  getWeekRangeNow() {
    return this.weekRangeNow;
  }

  setWeekDatesTimeNow() {
    const weekDatesNow = [];

    for (let i = 0; i < 7; i++) {
      weekDatesNow[i] = this.weekRangeNow.startOfWeek.plus({ hours: 24 * i });
    }

    this.weekDatesNow = weekDatesNow;
  }

  getWeekDatesTimeNow() {
    this.setWeekDatesTimeNow();
    return this.weekDatesNow;
  }

  weekDatesStringFormatted() {
    this.setWeekDatesTimeNow();
    const weekDatesString = this.weekDatesNow.map((datetime) => {
      const weekday = datetime.weekdayLong;
      const month = datetime.monthShort;
      const day = datetime.day.toString();
      return { weekday, month, day };
    });

    return weekDatesString;
  }

  weekDatesArray() {
    this.setWeekDatesTimeNow();
    const weekDatesArray = this.getWeekDatesTimeNow();
    return weekDatesArray;
  }
}

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
