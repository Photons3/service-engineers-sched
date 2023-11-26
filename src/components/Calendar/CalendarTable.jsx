import ServiceItinerary from "./ServiceItinerary";

import { DATE_CLASS, DATE_CLASS_NOW } from "../../helpers/DATE_CLASS";
import classNames from "../../helpers/classNames";

import { DUMMY_SERVICE_IT } from "../../DUMMY_DATA/DUMMY_SERVICE_IT";
import CalendarMainRow from "./CalendarMainRow";

export default function CalendarTable() {
  const servicePersonnelCount = DUMMY_SERVICE_IT.length;

  const dtNow = new DATE_CLASS(12, 12, 2023);

  const weekDates = dtNow.weekDatesArray();

  const weekDatesString = dtNow.weekDatesStringFormatted();

  return (
    <>
      <div
        className={classNames(
          `grid-rows-[auto,repeat(${servicePersonnelCount},auto)]`,
          "overflow-scroll grid sm:grid-cols-[125px,repeat(7,minmax(220px,auto))] grid-cols-[90px,repeat(7,minmax(150px,auto))] max-h-max max-w-[150%] text-center"
        )}
      >
        {/* First Column  */}
        <div className="row-start-[1] col-start-[1] sticky top-0 z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2"></div>

        {weekDatesString.map((item, index) => {
          return (
            <CalendarMainRow
              key={index}
              weekDatesString={item}
              currentIndex={index}
            />
          );
        })}

        {DUMMY_SERVICE_IT.map((item, index) => {
          return (
            <ServiceItinerary key={index} data={item} currentIndex={index} />
          );
        })}
      </div>
    </>
  );
}
