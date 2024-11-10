import React, { useEffect, useState } from "react";
import profileData from "../updata/profile.json";

function ProfilePage() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(profileData);
  }, []);

  return (
    <div>
      <h2>My Profile</h2>
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Bio:</strong> {profile.bio}
      </p>
    </div>
  );
}

export default ProfilePage;
