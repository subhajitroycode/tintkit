import React, { useState } from "react";
import Cards from "./Cards";
import Charts from "./Charts";
import ButtonShowcase from "./Buttons/ButtonShowcase";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("buttons");

  const tabContent = {
    buttons: <ButtonShowcase />,
    cards: <Cards />,
    charts: <Charts />,
  };

  const tabArr = ["buttons", "cards", "charts"];

  return (
    <div className="mt-4">
      <div className="flex space-x-4 mb-6 ml-4">
        {tabArr.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded-md transition-all duration-200 font-medium
            ${
              tab === activeTab
                ? "bg-neutral-700 dark:bg-neutral-300 text-neutral-50 dark:text-neutral-950 shadow-md"
                : "bg-neutral-200 dark:bg-neutral-700/50 text-neutral-700 dark:text-neutral-100 hover:bg-neutral-300 hover:dark:bg-neutral-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="pb-6">{tabContent[activeTab]}</div>
    </div>
  );
};

export default TabComponent;
