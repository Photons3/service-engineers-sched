import { useRef } from "react";
import ContentEditable from "react-contenteditable";

export default function SingleItineraryItem({
  itineraryItem,
  uniqueId,
  postItinerary,
  mongoId,
  onSubmit,
}) {
  const text = useRef("");
  text.current = itineraryItem;

  function parseUniqueId(UID) {
    const uniqueIdParsed = UID.split("_");
    console.log(uniqueIdParsed);

    if (mongoId) {
    }
  }

  function handleChange(evt) {
    text.current = evt.target.value;
  }

  function handleKeyDown(event) {
    if (event.key == "Enter") {
      onSubmit(mongoId, uniqueId);
      console.log("Enter was pressed");
    }
  }

  return (
    <li>
      <ContentEditable
        html={text.current}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </li>
  );
}
