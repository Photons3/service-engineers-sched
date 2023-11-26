import { useContext } from "react";
import { DateTime } from "luxon";

import ServiceItineraryItem from "./ServiceItineraryItem";

import classNames from "../../helpers/classNames";
import { SelectedDatesContext } from "../../store/SelectedDates";

export default function ServiceItinerary({ currentIndex, data }) {
  // ADD 2 to current index to hit the right row
  const rowStart = currentIndex + 2;

  const selectedDatesCtx = useContext(SelectedDatesContext);
  const selectedDates = selectedDatesCtx.dateTime.weekDatesArray();

  return (
    <>
      {/* First Column Prints the Name */}
      <div
        className={classNames(
          `row-start-[${rowStart}]`,
          "col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs py-[1rem] content-center text-center text-slate-400 sticky left-0 bg-white dark:bg-slate-800 font-medium"
        )}
      >
        <h1 className="uppercase">{data.name}</h1>
        <p>Group {data.group}</p>
      </div>

      {/* This loops to all filtered dates and creates the whole row
        this works with or without data */}
      {selectedDates.map((selectedDate, index) => {
        const colStart = index + 2;

        const uniqueKey = rowStart.toString() + "_" + colStart.toString();

        return (
          <div
            key={uniqueKey}
            className={classNames(
              `row-start-[${rowStart}] col-start-[${colStart}]`,
              "border-slate-100 dark:border-slate-200/5 border-b border-r py-1.5"
            )}
          >
            {/* This loops to all fetched data if it finds an item that 
            has the same date as the current column it renders 
            a component that list the itineraries for the day.
            This works from left to right row
            This uses guard clauses */}
            {data.weekItineraries.length > 0 &&
              data.weekItineraries.map((item, index) => {
                const dateLuxon = DateTime.fromMillis(item.date);

                if (!selectedDate.hasSame(dateLuxon, "day")) {
                  return null;
                } else {
                  return (
                    <ServiceItineraryItem
                      key={`${uniqueKey}_index_serviceItineraryItem`}
                      weekItineraryList={item}
                      uniqueKey={uniqueKey}
                    />
                  );
                }
              })}
          </div>
        );
      })}
    </>
  );
}
