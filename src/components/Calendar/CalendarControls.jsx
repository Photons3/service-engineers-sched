import { useContext, useState } from "react";

import { SelectedDatesContext } from "../../store/SelectedDates";

import WeekInputs from "../UI/WeekInputs";

export default function CalendarControls() {
  const selectedDates = useContext(SelectedDatesContext);
  const filteredWeek = selectedDates.dateTime.getWeekNumber();
  const [weekFilter, setWeekFilter] = useState(filteredWeek);

  function onChangeWeekNumber() {
    const filteredWeek = selectedDates.dateTime.getWeekNumber();
    setWeekFilter(filteredWeek);
  }

  return (
    <div className="flex flex-row justify-center my-1.5">
      <div className="mx-2">
        <h1>Service Team Schedule Week {weekFilter}</h1>
      </div>
      <div className="mx-5">
        <WeekInputs
          className="flex-auto"
          onChangeWeekNumber={onChangeWeekNumber}
        />
      </div>
    </div>
  );
}
