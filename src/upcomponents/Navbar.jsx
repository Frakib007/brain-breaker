import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileData from "../updata/profile.json";
import scheduleData from "../updata/schedule.json";

function Navbar() {
  const [profile, setProfile] = useState({});
  const [upcomingTest, setUpcomingTest] = useState(null);

  useEffect(() => {
    setProfile(profileData);

    // Find the soonest upcoming test
    const upcomingTests = scheduleData
      .filter((item) => item.upcomingTest)
      .map((item) => item.upcomingTest)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (upcomingTests.length > 0) {
      setUpcomingTest(upcomingTests[0]);
    }
  }, []);

  return (
    <nav className="bg-[#054050] p-4 flex justify-between items-center ">
      <div className="text-white font-bold text-xl">
        <Link to="/">Campus Connect</Link>
      </div>
      <ul className="flex items-center gap-4">
        <li>
          <Link to="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link to="/events" className="text-white">
            Events
          </Link>
        </li>
        <li>
          <Link to="/schedule" className="text-white">
            My Schedule
          </Link>
        </li>
        <li>
          <Link to="/profile" className="text-white">
            Profile
          </Link>
        </li>
      </ul>
      <div className="bg-white text-blue-600 rounded-full px-4 py-2 flex items-center gap-3">
        <div className="text-sm font-semibold">
          <p>{profile.name}</p>
          <p>CGPA: {profile.cgpa}</p>
          <p>Attendance: {profile.attendance}</p>
          {upcomingTest && (
            <p>
              Upcoming Test: {upcomingTest.title} on {upcomingTest.date}
            </p>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
