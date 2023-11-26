import ServiceItineraryItem from "./ServiceItineraryItem";

import classNames from "../../helpers/classNames";

export default function ServiceItinerary({ currentIndex, data, className }) {
  // ADD 2 to current index to hit the right row
  const rowStart = currentIndex + 2;

  return (
    <>
      <div
        className={classNames(
          `row-start-[${rowStart}]`,
          "col-start-[1] border-slate-100 dark:border-slate-200/5 border-r text-xs py-[1rem] content-center text-center text-slate-400 uppercase sticky left-0 bg-white dark:bg-slate-800 font-medium"
        )}
      >
        {data.name}
      </div>

      {data.weekItineraries.map((item, index) => {
        // ADD 2 TO INDEX TO HIT THE RIGHT COLUMN
        // OUTPUTS THE WHOLE ROW ITINERARIES
        // TODO: DO A CHECK IF THERE IS NO ITINERARY IN THAT DAY
        const colStart = index + 2;

        const uniqueKey = rowStart.toString() + colStart.toString();
        return (
          <div
            key={uniqueKey}
            className={classNames(
              `row-start-[${rowStart}] col-start-[${colStart}]`,
              "border-slate-100 dark:border-slate-200/5 border-b border-r py-1.5"
            )}
          >
            <ServiceItineraryItem
              weekItineraryList={item}
              uniqueKey={uniqueKey}
            />
          </div>
        );
      })}
    </>
  );
}
