"use client";
import { HISTORY_TAB } from "@/constants/history-constant";
import Link from "next/link";
import { useHistoryTab } from "./hooks/useHistoryTab";

function HistoryTab() {
  const { currentTab, onCurrentTab } = useHistoryTab();
  return (
    <div className="flex w-full items-center justify-between border-b border-b-[#E3E2E2]">
      {HISTORY_TAB.map(({ type, text, link }) => (
        <Link
          onClick={() => onCurrentTab(type)}
          href={link}
          className={`flex flex-1 items-center justify-center p-4 ${currentTab === type && "border-b border-b-[#2A14B4]"} `}
          key={type}
        >
          <p className="text-[18px] font-medium">{text}</p>
        </Link>
      ))}
    </div>
  );
}

export default HistoryTab;
