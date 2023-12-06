import { DateTime } from "luxon";

import clientPromise from "../../../models/mongoDBPromise";
import { DATE_CLASS_NOW } from "../../../helpers/DATE_CLASS";

export default async function handler(req, res) {
  let response = [];

  function getResponseObjectFromDatabase(item) {
    const responseLength = response.length;
    let usernameMatched = false;

    // Loops through all the responses array
    for (let i = 0; i <= responseLength; i++) {
      // This code just compensates for array bounds if i is greater than 0
      let selectedUsername;
      let index;

      if (responseLength === 0) {
        selectedUsername = null;
      } else if (responseLength > 0) {
        if (i > 0) {
          index = i - 1;
          selectedUsername = response[index].username;
        } else if (i === 0) {
          //This is not needed because it will just be redundant
          //selectedUsername = response[i].username;
        }
      }

      // Check if username is already in the array if it exist
      // then append the data on current array if it is new, append new entry in the array
      if (selectedUsername === item.username) {
        usernameMatched = true;
        const responseItem = response[index];
        const lengthOfWeekItineraries = responseItem.weekItineraries.length;

        // When the weekItineraries is empty just append the new data
        if (lengthOfWeekItineraries === 0) {
          const weekItineraryItem = {
            date: item?.date,
            list: [
              {
                id: item._id,
                details: item.details?.description || "",
                institution: item.details?.institution || "",
                machine: item.details?.machine || "",
                location: {
                  latitude: item.details.location?.latitude || 0,
                  longitude: item.details.location?.longitude || 0,
                  description: item.details.location?.description || "",
                },
                modifiedTime: item.modifiedTime,
                modifiedBy: item.modifiedBy,
              },
            ],
          };

          // This append new value to weekitineraries array because no itinerary available has the same date
          response[index].weekItineraries.push(weekItineraryItem);
        }
        // Loop through all the service engineer itinerary for the week
        // if it has the same date append new data otherwise push new value to the list array
        let dateMatched = false;
        for (let j = 0; j < lengthOfWeekItineraries; j++) {
          const selectedDate = responseItem.weekItineraries[j].date;

          // This checks if the current item date is the same date as the one in the current index of array
          const selectedDateTime = DateTime.fromMillis(selectedDate);
          const currentDateTime = DateTime.fromMillis(item.date);
          if (currentDateTime.hasSame(selectedDateTime, "day")) {
            dateMatched = true;
            const weekItineraryItem = {
              date: item.date,
              list: {
                id: item._id,
                details: item.details?.description || "",
                institution: item.details?.institution || "",
                machine: item.details?.machine || "",
                location: {
                  latitude: item.details.location?.latitude || 0,
                  longitude: item.details.location?.longitude || 0,
                  description: item.details.location?.description || "",
                },
                modifiedTime: item.modifiedTime,
                modifiedBy: item.modifiedBy,
              },
            };
            // This push the new itinerary with the same day to the list inside the weekitinerary array
            response[index].weekItineraries[j].list.push(
              weekItineraryItem.list
            );
          } else if (!dateMatched && !(j < lengthOfWeekItineraries)) {
            const weekItineraryItem = {
              date: item?.date,
              list: [
                {
                  id: item._id,
                  details: item.details?.description || "",
                  institution: item.details?.institution || "",
                  machine: item.details?.machine || "",
                  location: {
                    latitude: item.details.location?.latitude || 0,
                    longitude: item.details.location?.longitude || 0,
                    description: item.details.location?.description || "",
                  },
                  modifiedTime: item.modifiedTime,
                  modifiedBy: item.modifiedBy,
                },
              ],
            };

            // This append new value to weekitineraries array because no itinerary available has the same date
            response[index].weekItineraries.push(weekItineraryItem);
          }
        }
      } else if (!usernameMatched && i === responseLength) {
        // New Entry of Username this means just append the data to the array
        // Check if there is no match of username and if is in the end of the array then no match append new
        const weekItineraryItem = [
          {
            date: item?.date,
            list: [
              {
                id: item._id,
                details: item.details?.description || "",
                institution: item.details?.institution || "",
                machine: item.details?.machine || "",
                location: {
                  latitude: item.details.location?.latitude || 0,
                  longitude: item.details.location?.longitude || 0,
                  description: item.details.location?.description || "",
                },
                modifiedTime: item.modifiedTime,
                modifiedBy: item.modifiedBy,
              },
            ],
          },
        ];

        // No need for logic for new list date because it is new entry for array
        const newResponseItem = {
          username: item.username,
          name: item.displayName,
          group: item.groupNumber,
          weekItineraries: weekItineraryItem,
        };

        response.push(newResponseItem);
      }
    }
  }

  function setInitialColumnsForServicePersonnels(item) {
    // Enter new array for leader
    const newLeaderEntry = {
      username: item.leader.username,
      name: item.leader.displayName,
      group: item.group,
      weekItineraries: [],
    };
    response.push(newLeaderEntry);

    // Enter new array for each members
    item.members.forEach((member) => {
      const newGroupEntry = {
        username: member.username,
        name: member.displayName,
        group: item.group,
        weekItineraries: [],
      };
      response.push(newGroupEntry);
    });
  }

  // ACTUAL API ROUTE
  try {
    const dbName = "MedevService";
    const collectionNameItineraries = "itineraries";
    const collectionNameServiceGroupings = "serviceGroupings";

    const client = await clientPromise;
    const db = client.db(dbName);
    const collectionIt = db.collection(collectionNameItineraries);
    const collectionServiceGroupings = db.collection(
      collectionNameServiceGroupings
    );

    const personnels = await collectionServiceGroupings.findOne(
      { date: { $lte: 4 } },
      { sort: { date: -1 } }
    );
    personnels.groups.forEach(setInitialColumnsForServicePersonnels);

    const dateTimeNow = DATE_CLASS_NOW();
    // Fetch the Database
    if (req.method === "GET") {
      const weekRange = dateTimeNow.setWeekRange();
      const startOfWeek = weekRange.startOfWeek.ts;
      const endOfWeek = weekRange.endOfWeek.ts;

      const query = {
        date: { $gte: startOfWeek, $lte: endOfWeek },
        isActive: true,
      };
      const options = { sort: { groupNumber: 1 } };

      const itineraries = await collectionIt.find(query, options).toArray();

      // If there is no results found TODO: Handle this case
      // if ((await results.countDocuments(query)) === 0) {
      //   console.log("No documents found!");
      // }

      // Run the algorithm for setting response with each item from the database
      itineraries.forEach(getResponseObjectFromDatabase);
      res.status(200).json(response);
    }

    if (req.method === "POST") {
    }
  } catch (e) {
    console.error(e);
  }
}
