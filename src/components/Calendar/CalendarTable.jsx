import { useContext } from "react";

import ServiceItinerary from "./ServiceItinerary";
import CalendarMainRow from "./CalendarMainRow";

import { SelectedDatesContext } from "../../store/SelectedDates";
import classNames from "../../helpers/classNames";

import { DUMMY_SERVICE_IT } from "../../DUMMY_DATA/DUMMY_SERVICE_IT";

export default function CalendarTable() {
  const selectedDatesCtx = useContext(SelectedDatesContext);
  const selectedDateTime = selectedDatesCtx.dateTime;
  const selectedDates = selectedDateTime.getWeekDatesTime();

  const servicePersonnelCount = DUMMY_SERVICE_IT.length;

  return (
    <>
      <div
        className={classNames(
          `grid-rows-[auto,repeat(${servicePersonnelCount},auto)]`,
          `lg:grid-cols-[140px,repeat(${selectedDates.length},minmax(220px,auto))] sm:grid-cols-[110px,repeat(${selectedDates.length},minmax(190px,auto))] grid-cols-[90px,repeat(${selectedDates.length},minmax(150px,auto))]`,
          "overflow-scroll grid max-h-full max-w-[175%] text-center"
        )}
      >
        {/* First Column  */}
        <div className="row-start-[1] col-start-[1] sticky left-0 top-0 z-20 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2"></div>

        {selectedDates.map((item, index) => {
          return (
            <CalendarMainRow
              key={`1_${index + 1}`}
              currentIndex={index}
            />
          );
        })}

        {DUMMY_SERVICE_IT.map((item, index) => {
          return (
            <ServiceItinerary
              key={`${index + 1}_1`}
              data={item}
              currentIndex={index}
            />
          );
        })}
      </div>
    </>
  );
}
