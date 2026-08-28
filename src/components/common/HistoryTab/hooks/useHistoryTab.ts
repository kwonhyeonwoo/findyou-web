import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';

export const useHistoryTab = () => {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState<"post" | "application">("post");
  const { id } = useParams();

  const handleSelectedTab = (type: "post" | "application") => {
    setSelectedTab(type)
  }
  return {
    pathname,
    id,
    selectedTab,
    handleSelectedTab,
  };
};
