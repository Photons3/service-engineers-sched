import { createContext, useContext } from "react";

import { DateTime } from "luxon";

import { DATE_CLASS, DATE_CLASS_NOW } from "../helpers/DATE_CLASS";

function setDateTime(day, month, year) {
  this.dateTime = new DATE_CLASS(day, month, year);
  return this.dateTime;
}

function NEW_DATE_FROM_WEEK_YEAR(week, year) {
  const dt = DateTime.fromObject({
    weekYear: year,
    weekNumber: week,
  });

  this.dateTime = new DATE_CLASS(dt.day, dt.month, dt.year);
}

export const SelectedDatesContext = createContext({
  dateTime: new DATE_CLASS_NOW(),
  setDateTime: setDateTime,
  dateTimeNow: new DATE_CLASS_NOW(),
  SetFromWeekYear: NEW_DATE_FROM_WEEK_YEAR,
});

export default function SelectedDateProvider(props) {
  const selectedDateContext = useContext(SelectedDatesContext);
  return (
    <SelectedDatesContext.Provider value={selectedDateContext}>
      {props.children}
    </SelectedDatesContext.Provider>
  );
}
