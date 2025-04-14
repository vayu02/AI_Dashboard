import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function WelcomeSection() {
  return (
    <div className="bg-white rounded-md shadow-md p-6 flex items-center mb-6">
      <div className="w-16 h-16 rounded-full overflow-hidden bg-blue-500 text-white flex items-center justify-center text-2xl mr-4">
        <FontAwesomeIcon icon={faRobot} size="lg" />
      </div>
      <div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome to the VOIS AI!
        </h1>
        <p className="text-gray-600">
          Explore the power of AI and build intelligent bots for your needs.
        </p>
      </div>
    </div>
  );
}

export default WelcomeSection;
