export default function ServiceItineraryItem({ weekItineraryList, uniqueKey }) {
  return (
    <>
      <ul>
        {/* Checks if weekItineraryList exists and maps it to a li DOM */}
        {weekItineraryList ? (
          weekItineraryList.list.map((item, index) => {
            return <li key={`${uniqueKey}_${index}`}>{item.details}</li>;
          })
        ) : (
          <li key={`${uniqueKey}_0`}></li>
        )}
      </ul>
    </>
  );
}
