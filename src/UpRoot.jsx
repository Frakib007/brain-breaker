import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./upcomponents/Navbar";
import EventPage from "./uppages/EventPage";
import HomePage from "./uppages/HomePage";
import ProfilePage from "./uppages/ProfilePage";
import SchedulePage from "./uppages/SchedulePage";
import "./upstyles.css";

function UpRoot() {
  return (
    <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-32 pb-20 mt-[92px] md:-mt-[118px] relative">
      {/* <img
        className="md:order-2 object-cover ml-auto animate-[animate-updown_5s_ease-in-out_infinite] absolute -right-0 -bottom-10"
        src={herog}
        width="500px"
        height="500px"
        alt="Banner"
      /> */}
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default UpRoot;
