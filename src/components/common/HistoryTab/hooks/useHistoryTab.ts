import { usePathname } from "next/navigation";
import { useState } from "react";

export const useHistoryTab = () => {
  const pathname = usePathname();
  const [currentTab, setCurrentTab] = useState<"request" | "application">(
    "request",
  );
  const onCurrentTab = (type: "request" | "application") => setCurrentTab(type);

  return {
    pathname,
    currentTab,
    onCurrentTab,
  };
};
