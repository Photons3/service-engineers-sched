import { createContext, useContext } from "react";

import { DATE_CLASS, DATE_CLASS_NOW } from "../helpers/DATE_CLASS";

function setDateTime(day, month, year) {
  this.dateTime = new DATE_CLASS(day, month, year);
  return this.dateTime;
}

export const SelectedDatesContext = createContext({
  dateTime: new DATE_CLASS_NOW(),
  setDateTime: setDateTime,
  dateTimeNow: new DATE_CLASS_NOW(),
});

export default function SelectedDateProvider(props) {
  const selectedDateContext = useContext(SelectedDatesContext);
  return (
    <SelectedDatesContext.Provider value={selectedDateContext}>
      {props.children}
    </SelectedDatesContext.Provider>
  );
}
