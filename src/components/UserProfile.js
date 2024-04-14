// UserProfile.js
import React, { useState } from "react";

const UserProfile = ({ onNext }) => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [location, setLocation] = useState("");

  const handleNext = () => {
    onNext({ profilePicture, location });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <h2>Screen 2: Profile Setup</h2>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default UserProfile;
