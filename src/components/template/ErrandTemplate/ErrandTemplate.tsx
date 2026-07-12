"use client";
import ErrandInput from "@/components/common/ErrandInput/ErrandInput";
import { useErrandSearch } from "./hooks/useErrandSearch";
import CategoryTabs from "@/components/common/CategoryTabs/CategoryTabs";
import { useErrandCategory } from "./hooks/useErrandCategory";
import { useErrandListsQuery } from "@/hooks/quires/errand/useErrandListsQuery";
import ErrandList from "@/components/Errand/ErrandList/ErrandList";
import { useErrandTemplate } from "./hooks/useErrandTemplate";

export default function ErrandTemplate() {
  const { handleRouter } = useErrandTemplate();
  const { listTabs, keyword, handleKeydown } = useErrandSearch();
  const { currentCategory, onCurrentCategory } = useErrandCategory();
  const { data } = useErrandListsQuery({ keyword, category: currentCategory });

  return (
    <div className="mt-4 flex flex-col gap-4 pb-20">
      <ErrandInput handleKeydown={handleKeydown} />
      <div className="flex max-w-[480px] [scrollbar-width:none] items-center gap-2 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {listTabs.map((item) => (
          <CategoryTabs
            key={item.type}
            text={item.text}
            type={item.type}
            isActive={currentCategory === item.type}
            onCurrCategory={onCurrentCategory}
          />
        ))}
      </div>
      <div className="no-scrollbar flex max-h-220 flex-col gap-4 overflow-y-auto pb-20">
        {data?.map((item) => (
          <ErrandList {...item} key={item.id} onRouter={handleRouter} />
        ))}
      </div>
    </div>
  );
}
