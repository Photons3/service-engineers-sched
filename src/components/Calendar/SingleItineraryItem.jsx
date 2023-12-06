import React, { useState } from "react";

export default function SingleItineraryItem({ itineraryItem }) {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

  const handleItemChange = (event) => {
    console.log(event);
    const newItems = [...items];
    newItems[index] = event.target.innerText;
    setItems(newItems);
  };
  return (
    <li
      contentEditable
      suppressContentEditableWarning
      onBlur={(event) => handleItemChange(event)}
    >
      <input type="text" value={itineraryItem.details} />
    </li>
  );
}
