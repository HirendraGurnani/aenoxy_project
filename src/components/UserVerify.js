// UserVerify.js
import React from "react";

const UserVerify = ({ userData }) => {
  return (
    <div>
      <h2>Screen 4: Verify Email</h2>
      <p>Please verify your email address: {userData.email}</p>
      {/* Display other user data as needed */}
    </div>
  );
};

export default UserVerify;
