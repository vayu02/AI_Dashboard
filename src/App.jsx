import React from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import IntegrationsPage from "./pages/IntegrationsPage";
import LiveAIAgendaPage from "./pages/LiveAIAgendaPage";
import TalkToUsPage from "./pages/TalkToUsPage";
import EscalationMetricsPage from "./pages/EscalationMetricsPage";
import MyBotsPage from "./pages/MyBotsPage";
import BotBuilderPage from "./pages/BotBuilderPage.jsx";
import ChannelsPage from "./pages/ChannelsPage";
import ProductionPage from "./pages/ProductionPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import AIEnginePage from "./pages/AIEnginePage";
import LoginRelatedPage from "./pages/LoginRelatedPage.jsx";

function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 border-b bg-white">
          <Header />
        </div>

        {/* Page content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/live-ai-agenda" element={<LiveAIAgendaPage />} />
            <Route path="/talk-to-us" element={<TalkToUsPage />} />
            <Route
              path="/escalation-metrics"
              element={<EscalationMetricsPage />}
            />
            <Route path="/my-bots" element={<MyBotsPage />} />
            <Route path="/bot-builder" element={<BotBuilderPage />} />
            <Route path="/channels" element={<ChannelsPage />} />
            <Route path="/production" element={<ProductionPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/ai-engine" element={<AIEnginePage />} />
            <Route path="/login" element={<LoginRelatedPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
