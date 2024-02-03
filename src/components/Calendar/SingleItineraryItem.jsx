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

  function handleChange(evt) {
    text.current = evt.target.value;
  }

  function handleKeyDown(event) {
    if (event.key == "Enter") {
      event.target.blur();
      const data = text.current;
      onSubmit(mongoId, uniqueId, data);
    }
  }

  function handleBlur() {
    const data = text.current;
    onSubmit(mongoId, uniqueId, data);
  }

  return (
    <li>
      <ContentEditable
        html={text.current}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        // onBlur={handleBlur}
      />
    </li>
  );
}
