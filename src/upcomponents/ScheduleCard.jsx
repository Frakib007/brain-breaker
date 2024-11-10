import React from 'react';

function ScheduleCard({ item }) {
  return (
    <div className="schedule-card">
      <h3>{item.course}</h3>
      <p><strong>Time:</strong> {item.time}</p>
      <p><strong>Day:</strong> {item.day}</p>
    </div>
  );
}

export default ScheduleCard;
