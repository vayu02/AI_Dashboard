import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCog,
  faTrash,
  faPencilAlt,
  faShareAlt,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp as faWhatsappBrand } from "@fortawesome/free-brands-svg-icons";

const myBotsData = [
  {
    id: 1,
    name: "WhatsApp Sales Bot",
    type: "WhatsApp Bot",
    description: "Automates sales inquiries and order processing on WhatsApp.",
  },
  {
    id: 2,
    name: "Stock Screener Bot",
    type: "Stock Screening Bot",
    description:
      "Monitors stock market data based on your criteria and sends alerts.",
  },
  {
    id: 3,
    name: "Customer Support Chatbot",
    type: "Website Chatbot",
    description: "Provides instant customer support on your website.",
  },
  {
    id: 4,
    name: "Lead Generation Bot",
    type: "Landing Page Bot",
    description:
      "Collects leads and qualifies potential customers on your landing pages.",
  },
  {
    id: 5,
    name: "Social Media Manager Bot",
    type: "Social Media Bot",
    description:
      "Schedules posts and manages interactions on your social media platforms.",
  },
];

const BotCard = ({ bot }) => {
  const getBotIcon = (type) => {
    switch (type) {
      case "WhatsApp Bot":
        return faWhatsappBrand;
      case "Stock Screening Bot":
        return faChartLine;
      case "Website Chatbot":
        return faCog;
      case "Landing Page Bot":
        return faPencilAlt;
      case "Social Media Bot":
        return faShareAlt;
      default:
        return faRobot;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full">
            <FontAwesomeIcon icon={getBotIcon(bot.type)} size="lg" />
          </div>
          <h3 className="ml-4 text-lg font-semibold text-gray-800">
            {bot.name}
          </h3>
        </div>
        <p className="text-gray-600 text-sm mb-5 leading-relaxed">
          {bot.description}
        </p>

        <div className="flex justify-between pt-4 border-t border-gray-200 text-sm">
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition">
            <FontAwesomeIcon icon={faPencilAlt} /> Edit
          </button>
          <button className="flex items-center gap-2 text-red-500 hover:text-red-700 transition">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition">
            <FontAwesomeIcon icon={faCog} /> Rename
          </button>
        </div>
      </div>
    </div>
  );
};

const MyBotsPage = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🤖 My Bots</h2>
        <p className="text-gray-500 mt-1">
          Manage and monitor your AI-powered bots in one place.
        </p>
      </div>

      {myBotsData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myBotsData.map((bot) => (
            <BotCard key={bot.id} bot={bot} />
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-center mt-8">
          You haven’t created any bots yet. Start by creating your first bot!
        </div>
      )}
    </div>
  );
};

export default MyBotsPage;
