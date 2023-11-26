import ServiceItinerary from "./ServiceItinerary";

import { DATE_CLASS_NOW } from "../../helpers/DATE_CLASS";
import classNames from "../../helpers/classNames";

import { DUMMY_SERVICE_IT } from "../../DUMMY_DATA/DUMMY_SERVICE_IT";
import CalendarMainRow from "./CalendarMainRow";

export default function CalendarTable() {
  const selectedDateTime = new DATE_CLASS_NOW();
  const weekDatesString = selectedDateTime.weekDatesStringFormatted();
  const selectedDates = selectedDateTime.getWeekDatesTimeNow();

  const servicePersonnelCount = DUMMY_SERVICE_IT.length;

  return (
    <>
      <div
        className={classNames(
          `grid-rows-[auto,repeat(${servicePersonnelCount},auto)]`,
          "overflow-scroll grid lg:grid-cols-[140px,repeat(7,minmax(220px,auto))] sm:grid-cols-[110px,repeat(7,minmax(190px,auto))] grid-cols-[90px,repeat(7,minmax(150px,auto))] max-h-full max-w-[175%] text-center"
        )}
      >
        {/* First Column  */}
        <div className="row-start-[1] col-start-[1] sticky left-0 top-0 z-20 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2"></div>

        {weekDatesString.map((item, index) => {
          return (
            <CalendarMainRow
              key={`1_${index + 1}`}
              weekDatesString={item}
              currentIndex={index}
            />
          );
        })}

        {DUMMY_SERVICE_IT.map((item, index) => {
          return (
            <ServiceItinerary
              key={`${index + 1}_1`}
              data={item}
              selectedDates={selectedDates}
              currentIndex={index}
            />
          );
        })}
      </div>
    </>
  );
}
