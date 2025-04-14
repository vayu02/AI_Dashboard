import React from "react";
import { Link } from "react-router"; // corrected import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faWandMagicSparkles,
  faComments,
  faRocket,
  faChartLine,
  faBrain,
  faQuestionCircle,
  faRightToBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md p-4 flex justify-between items-center z-50 border-b border-gray-200">
      <nav className="hidden md:flex space-x-6 text-sm">
        {[
          { to: "/my-bots", icon: faRobot, label: "My Bots" },
          {
            to: "/bot-builder",
            icon: faWandMagicSparkles,
            label: "Bot Builder",
          },
          { to: "/channels", icon: faComments, label: "Channels" },
          { to: "/production", icon: faRocket, label: "Production" },
          { to: "/analytics", icon: faChartLine, label: "Analytics" },
          { to: "/ai-engine", icon: faBrain, label: "AI Engine" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition"
          >
            <FontAwesomeIcon icon={item.icon} />
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="relative">
        <button
          className="w-10 h-10 flex items-center justify-center bg-gray-100 text-indigo-500 rounded-full hover:ring-2 ring-indigo-300 transition"
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <FontAwesomeIcon icon={faUserCircle} size="lg" />
        </button>
        {isUserMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-50 animate-fade-in">
            <Link
              to="/help"
              className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800 flex items-center"
            >
              <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
              Help
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800 flex items-center"
            >
              <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
