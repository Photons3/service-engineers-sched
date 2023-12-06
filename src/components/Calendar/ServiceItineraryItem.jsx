import SingleItineraryItem from "./SingleItineraryItem";

export default function ServiceItineraryItem({ weekItineraryList, uniqueKey }) {
  return (
    <>
      <ul>
        {/* Checks if weekItineraryList exists and maps it to a li DOM */}
        {weekItineraryList
          ? weekItineraryList.list.map((item, index) => {
              return (
                <SingleItineraryItem
                  itineraryItem={item}
                  key={`${uniqueKey}_${index}`}
                />
              );
            })
          : null}
      </ul>
    </>
  );
}
