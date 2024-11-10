import React from "react";
import herog from "/images/hero-graphics.svg";
function EventCard({ event }) {
  return (
    <div className="event-card">
      <div>
        <img
          className="md:order-2 object-cover ml-auto animate-[animate-updown_5s_ease-in-out_infinite] absolute -right-0 -bottom-10"
          src={herog}
          width="500px"
          height="500px"
          alt="Banner"
        />
      </div>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Time:</strong> {event.time}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
    </div>
  );
}

export default EventCard;
