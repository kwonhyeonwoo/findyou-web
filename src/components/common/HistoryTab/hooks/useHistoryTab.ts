import { useState } from "react";

export const useHistoryTab = () => {
  const [currentTab, setCurrentTab] = useState<"request" | "backup">("request");
  const onCurrentTab = (type: "request" | "backup") => setCurrentTab(type);

  return {
    currentTab,
    onCurrentTab,
  };
};
