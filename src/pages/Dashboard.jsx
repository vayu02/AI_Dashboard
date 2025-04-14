import React, { useState } from "react";
import WelcomeSection from "../components/WelcomeSection";
import OverviewTab from "../components/tabs/OverviewTab";
import RecentBotsTab from "../components/tabs/RecentBotsTab";
import SuggestionsTab from "../components/tabs/SuggestionsTab";
import ArticleCard from "../components/ArticleCard";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <WelcomeSection />

      <div className="bg-white rounded-md shadow-md mb-6">
        <div className="flex border-b border-gray-200">
          <button
            className={`px-4 py-3 text-sm font-medium transition ${
              activeTab === "tab1"
                ? "text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50"
                : "text-gray-600 hover:text-indigo-500"
            }`}
            onClick={() => handleTabClick("tab1")}
          >
            <i className="fa-solid fa-layer-group mr-2"></i> Overview
          </button>

          <button
            className={`px-4 py-3 text-gray-600 focus:outline-none ${
              activeTab === "tab2"
                ? "bg-gray-100 text-blue-500 border-b-2 border-blue-500 font-semibold"
                : ""
            }`}
            onClick={() => handleTabClick("tab2")}
          >
            <i className="fa-solid fa-clock-rotate-left mr-2"></i> Recent Bots
          </button>
          <button
            className={`px-4 py-3 text-gray-600 focus:outline-none ${
              activeTab === "tab3"
                ? "bg-gray-100 text-blue-500 border-b-2 border-blue-500 font-semibold"
                : ""
            }`}
            onClick={() => handleTabClick("tab3")}
          >
            <i className="fa-solid fa-lightbulb mr-2"></i> Suggestions
          </button>
        </div>

        <div className="p-4">
          {activeTab === "tab1" && <OverviewTab />}
          {activeTab === "tab2" && <RecentBotsTab />}
          {activeTab === "tab3" && <SuggestionsTab />}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Explore More
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ULF6f9-sQzn3wfIcucxOqPNyg21Q2iallA&s"
            }
            title="Getting Started with Building a Bot"
            description="Learn the basics of creating your first AI-powered bot."
            link="#"
          />
          <ArticleCard
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY1xA4ZVTkdQnxO3TYFqYEjQkpcAWiq2a1_g&s"
            }
            title="Discover Live Chat Integrations"
            description="Connect your bots with various live chat platforms."
            link="#"
          />
          <ArticleCard
            image={
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fuseinsider.com%2Fwhatsapp-message-template%2F&psig=AOvVaw3uL7gcOUvAITXfCECOs1hU&ust=1744742871497000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKi75e2X2IwDFQAAAAAdAAAAABAE"
            }
            title="Automate Your WhatsApp Campaigns"
            description="Schedule and manage your WhatsApp bot campaigns effectively."
            link="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
