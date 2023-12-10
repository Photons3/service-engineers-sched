import { useContext, useEffect, useState } from "react";
import { useFetch } from "use-http";

import ServiceItinerary from "./ServiceItinerary";
import CalendarMainRow from "./CalendarMainRow";

import { SelectedDatesContext } from "../../store/SelectedDates";

export default function CalendarTable() {
  const [itineraryList, setItineraryList] = useState([]);

  const {
    get: getItinerary,
    post: postItinerary,
    response: responseItinerary,
    loading: loadingItinerary,
    error: errorItinerary,
  } = useFetch();

  useEffect(() => {
    async function loadInitialItinerary() {
      const initialItinerary = await getItinerary("/api/schedule/itineraries");

      if (responseItinerary.ok) {
        setItineraryList(initialItinerary);
      }
    }
    loadInitialItinerary();
  }, [getItinerary, responseItinerary, setItineraryList]);

  // async function addItinerary() {
  //   const newItinerary = await postItinerary("/api/schedule/itineraries", { title: "my new todo" });
  //   if (response.ok) setItineraryList([...itineraryList, newItinerary]);
  // }

  const selectedDatesCtx = useContext(SelectedDatesContext);
  const selectedDateTime = selectedDatesCtx.dateTime;
  const selectedDatesTimeString = selectedDateTime.weekDatesStringFormatted();

  const currentDate = selectedDatesCtx.dateTimeNow;
  const currentDateTimeString = currentDate.dateStringFormatted();

  return (
    <>
      <table className="table-fixed block w-full overflow-auto border-collapse max-h-[84vh] max-w-[100%] text-center">
        <thead>
          {/* First Column  */}
          <tr>
            <th className="sticky left-0 top-0 sm:w-[130px] lg:w-[180px] w-[110px] z-20 bg-white dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-700 border-slate-100 dark:border-black/10 bg-clip-padding text-slate-900 dark:text-slate-200 border-b text-sm font-medium py-2">
              {" "}
              {`Today is ${currentDateTimeString.weekday}`} <br></br>
              {`${currentDateTimeString.month} ${currentDateTimeString.day}`}
            </th>
            {selectedDatesTimeString.map((item, index) => {
              return (
                <CalendarMainRow
                  key={`1_${index + 1}`}
                  weekDatesString={item}
                  currentIndex={index}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {itineraryList.map((item, index) => {
            return (
              <ServiceItinerary
                key={`${index + 1}_1`}
                data={item}
                currentIndex={index}
                postItinerary={postItinerary}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
