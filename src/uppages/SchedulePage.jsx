import React, { useEffect, useState } from 'react';

import scheduleData from '../updata/schedule.json';
import ScheduleCard from '../upcomponents/ScheduleCard';

function SchedulePage() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(scheduleData);
  }, []);

  return (
    <div>
      <h2>My Schedule</h2>
      {schedule.map(item => (
        <ScheduleCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SchedulePage;
