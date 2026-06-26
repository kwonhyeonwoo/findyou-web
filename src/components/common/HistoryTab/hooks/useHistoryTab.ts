import { useState } from "react";

export const useHistoryTab = () => {
  const [currentTab, setCurrentTab] = useState<"request" | "application">(
    "request",
  );
  const onCurrentTab = (type: "request" | "application") => setCurrentTab(type);

  return {
    currentTab,
    onCurrentTab,
  };
};
