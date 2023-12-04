import { useContext, useEffect, useState, useCallback } from "react";
import useFetch from "use-http";

import ServiceItinerary from "./ServiceItinerary";
import CalendarMainRow from "./CalendarMainRow";

import { SelectedDatesContext } from "../../store/SelectedDates";
import classNames from "../../helpers/classNames";

export default function CalendarTable() {
  const [itineraryList, setItineraryList] = useState([]);

  const {
    get: getItinerary,
    post: postItinerary,
    response: responseItinerary,
    loading: loadingItinerary,
    error: errorItinerary,
  } = useFetch("http://localhost:3000");

  useEffect(() => {
    async function loadInitialItinerary() {
      const initialItinerary = await getItinerary("/api/schedule/itineraries");

      if (responseItinerary.ok) {
        setItineraryList(initialItinerary);
      }
    }
    loadInitialItinerary();
  }, [getItinerary, responseItinerary, setItineraryList]);

  const selectedDatesCtx = useContext(SelectedDatesContext);
  const selectedDateTime = selectedDatesCtx.dateTime;
  const selectedDatesTimeString = selectedDateTime.weekDatesStringFormatted();

  const currentDate = selectedDatesCtx.dateTimeNow;
  const currentDateTimeString = currentDate.dateStringFormatted();

  const servicePersonnelCount = itineraryList.length;

  return (
    <>
      <div
        className={classNames(
          `grid-rows-[auto,repeat(10,auto)]`,
          `lg:grid-cols-[150px,repeat(7,minmax(220px,auto))] sm:grid-cols-[110px,repeat(7,minmax(190px,auto))] grid-cols-[90px,repeat(7,minmax(150px,auto))]`,
          "overflow-scroll grid max-h-[84vh] max-w-[200%] text-center"
        )}
      >
        {/* First Column  */}
        <div className="row-start-[1] col-start-[1] sticky left-0 top-0 -z-10 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2">
          {`Today is ${currentDateTimeString.weekday}`} <br></br>
          {`${currentDateTimeString.month} ${currentDateTimeString.day}`}
        </div>

        {selectedDatesTimeString.map((item, index) => {
          return (
            <CalendarMainRow
              key={`1_${index + 1}`}
              weekDatesString={item}
              currentIndex={index}
            />
          );
        })}

        {itineraryList.map((item, index) => {
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
