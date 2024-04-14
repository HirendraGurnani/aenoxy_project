// UserPref.js
import React, { useState } from "react";

const UserPref = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleNext = () => {
    onNext(selectedOption);
  };

  return (
    <div>
      <h2>Screen 3: Purpose of Joining Dribbble</h2>
      <div>
        <input
          type="radio"
          id="designer"
          name="purpose"
          value="designer"
          checked={selectedOption === "designer"}
          onChange={() => setSelectedOption("designer")}
        />
        <label htmlFor="designer">
          I am a designer looking to share my work.
        </label>
      </div>
      <div>
        <input
          type="radio"
          id="hireDesigner"
          name="purpose"
          value="hireDesigner"
          checked={selectedOption === "hireDesigner"}
          onChange={() => setSelectedOption("hireDesigner")}
        />
        <label htmlFor="hireDesigner">I'm looking to hire a designer.</label>
      </div>
      <div>
        <input
          type="radio"
          id="inspiration"
          name="purpose"
          value="inspiration"
          checked={selectedOption === "inspiration"}
          onChange={() => setSelectedOption("inspiration")}
        />
        <label htmlFor="inspiration">
          I am looking for design inspiration.
        </label>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default UserPref;
