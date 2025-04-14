import React from "react";
import { NavLink, Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPuzzlePiece,
  faCalendarAlt,
  faHeadset,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const menuItems = [
    { to: "/integrations", icon: faPuzzlePiece, label: "Integrations" },
    { to: "/live-ai-agenda", icon: faCalendarAlt, label: "Live AI Agenda" },
    {
      to: "/escalation-metrics",
      icon: faTachometerAlt,
      label: "Escalation Metrics",
    },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between">
      {/* Top: Logo & Menu */}
      <div className="p-6 space-y-6">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 tracking-wide"
        >
          VOIS<span className="text-gray-800"> AI</span>
        </Link>
        {/* Logo */}

        {/* Nav Links */}
        <nav className="space-y-2 mt-10">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 
                 ${
                   isActive
                     ? "text-indigo-700 bg-indigo-100 border-l-4 border-indigo-500"
                     : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
                 }`
              }
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-base w-4 h-4 transition duration-200"
              />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom: CTA */}
      <div className="p-6 border-t border-gray-100">
        <NavLink
          to="/talk-to-us"
          className={({ isActive }) =>
            `group flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200
             ${
               isActive
                 ? "text-indigo-700 bg-indigo-100 border-l-4 border-indigo-500"
                 : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
             }`
          }
        >
          <FontAwesomeIcon icon={faHeadset} className="w-4 h-4" />
          <span>Talk to Us</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
