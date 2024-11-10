import React, { useEffect, useState } from "react";

import EventCard from "../upcomponents/EventCard";
import eventsData from "../updata/events.json";

function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
        // <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

export default EventPage;
