import React, { useState } from "react";

export default function SingleItineraryItem({ itineraryItem }) {
  return <li>{itineraryItem.details}</li>;
}
