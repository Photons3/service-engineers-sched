import { useState } from "react";

import SingleItineraryItem from "./SingleItineraryItem";

export default function ServiceItineraryItem({
  weekItineraryList,
  uniqueKey,
  uniqueId,
  postItinerary,
}) {
  const [itineraryList, setItineraryList] = useState(weekItineraryList);

  function onSubmit(mongoDbCollectionId, UID) {}
    
  return (
    <>
      <ul>
        {/* Checks if weekItineraryList exists and maps it to a li DOM */}
        {itineraryList ? (
          itineraryList.list.map((item, index) => {
            return (
              <SingleItineraryItem
                key={`${uniqueKey}_${index}`}
                uniqueId={`${uniqueId}_${index}`}
                itineraryItem={item.details}
                mongoId={item.id}
                postItinerary={postItinerary}
                onSubmit={onSubmit}
              />
            );
          })
        ) : (
          <SingleItineraryItem
            key={`${uniqueKey}_0`}
            itineraryItem={""}
            uniqueId={`${uniqueId}_0`}
            postItinerary={postItinerary}
          />
        )}
      </ul>
    </>
  );
}
