import { useState } from "react";

import SingleItineraryItem from "./SingleItineraryItem";

function parseUID(UID) {
  //UID FORMAT username_datetimets_index
  const parsedUID = UID.split("_");
  return parsedUID;
}
export default function ServiceItineraryItem({
  weekItineraryList,
  uniqueKey,
  uniqueId,
  postItinerary,
}) {
  const [itineraryList, setItineraryList] = useState(weekItineraryList);

  async function onSubmit(mongoDbCollectionId, UID, data) {
    const [username, dateTs, index] = parseUID(UID);
    if (mongoDbCollectionId) {
      const newItineraries = await postItinerary("/api/schedule/itineraries", {
        username: username,
        date: dateTs,
        mongoId: mongoDbCollectionId,
        details: data,
      });
    } else {
      const newItineraries = await postItinerary("/api/schedule/itineraries", {
        username: username,
        date: dateTs,
        mongoId: 0,
        description: data,
      });
      const newItineraryJSObj = JSON.parse(newItineraries);
      itineraryList.list.push({
        id: newItineraryJSObj.id,
        details: newItineraryJSObj.details.description,
      });
    }
  }

  return (
    <>
      <ul>
        {/* Checks if weekItineraryList exists and maps it to an li DOM */}
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
          })(
            <SingleItineraryItem
              key={`${uniqueKey}_0`}
              itineraryItem={""}
              uniqueId={`${uniqueId}_0`}
              postItinerary={postItinerary}
              onSubmit={onSubmit}
            />
          )
        ) : (
          <SingleItineraryItem
            key={`${uniqueKey}_0`}
            itineraryItem={""}
            uniqueId={`${uniqueId}_0`}
            postItinerary={postItinerary}
            onSubmit={onSubmit}
          />
        )}
      </ul>
    </>
  );
}
