'use client';
import { useErrandSearch } from './hooks/useErrandSearch';
import { useErrandCategory } from './hooks/useErrandCategory';
import { useErrandListsQuery } from '@/hooks/quires/errand/useErrandListsQuery';
import ErrandList from '@/components/Errand/ErrandList/ErrandList';
import { useErrandTemplate } from './hooks/useErrandTemplate';
import ErrandSearchInput from '@/components/common/ErrandSearchInput/ErrandSearchInput';
import StatusBar from '@/components/common/StatusBar/StatusBar';
import CategoryTab from '@/components/common/CategoryTab/CategoryTab';
import { CATEGORY_TABS_WITH_ALL } from '@/constants/category.-constants';

export default function ErrandTemplate() {
  const { status, handleStatusChange, handleRouter } = useErrandTemplate();
  const { keyword, handleKeydown } = useErrandSearch();
  const { currentCategory, onCurrentCategory } = useErrandCategory();
  const { data } = useErrandListsQuery({ keyword, category: currentCategory });

  return (
    <div className="mt-4 flex flex-col gap-4 pb-20">
      <ErrandSearchInput handleKeydown={handleKeydown} />
      <StatusBar status={status} handleStatusChange={handleStatusChange} />
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        {CATEGORY_TABS_WITH_ALL.map((item) => (
          <CategoryTab
            key={item.type}
            currCategory={currentCategory ? currentCategory : 'all'}
            text={item.text}
            type={item.type}
            handleCurrentCategory={onCurrentCategory}
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
