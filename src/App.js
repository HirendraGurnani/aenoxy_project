import "./App.css";
import React, { useState } from "react";
import UserDetails from "./components/UserDetails";
import UserProfile from "./components/UserProfile";
import UserPref from "./components/UserPref";
import UserVerify from "./components/UserVerify";

function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [userData, setUserData] = useState({});

  const handleNext = (data) => {
    setUserData({ ...userData, ...data });
    setCurrentScreen(currentScreen + 1);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <UserDetails onNext={handleNext} />;
      case 2:
        return <UserProfile onNext={handleNext} />;
      case 3:
        return <UserPref onNext={handleNext} />;
      case 4:
        return <UserVerify userData={userData} />;
      default:
        return null;
    }
  };

  return <div>{renderScreen()}</div>;
}

export default App;
