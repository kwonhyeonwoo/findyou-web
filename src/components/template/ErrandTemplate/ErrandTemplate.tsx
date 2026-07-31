'use client';
import { useErrandTemplate } from './hooks/useErrandTemplate';
import { useErrandListsQuery } from '@/hooks/quires/errand/useErrandListsQuery';
import ErrandList from '@/components/Errand/ErrandList/ErrandList';
import ErrandSearchInput from '@/components/common/ErrandSearchInput/ErrandSearchInput';
import StatusBar from '@/components/common/StatusBar/StatusBar';
import CategoryTab from '@/components/common/CategoryTab/CategoryTab';
import { CATEGORY_TABS_WITH_ALL } from '@/constants/category.-constants';
import { ErrandStatus } from '@/interfaces/errand.interface';

export default function ErrandTemplate() {
  const {
    keyword,
    currentCategory,
    status,
    handleStatusChange,
    handleKeydown,
    handleCurrentCategory,
    handleRouter,
  } = useErrandTemplate();
  const { data } = useErrandListsQuery({
    keyword,
    category: currentCategory,
    status,
  });
  console.log('data', data);
  return (
    <div className="mt-4 flex flex-col gap-4 pb-20">
      <ErrandSearchInput handleKeydown={handleKeydown} />
      <StatusBar
        status={status as ErrandStatus}
        handleStatusChange={handleStatusChange}
      />
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        {CATEGORY_TABS_WITH_ALL.map((item) => (
          <CategoryTab
            key={item.type}
            currCategory={currentCategory ? currentCategory : 'all'}
            text={item.text}
            type={item.type}
            handleCurrentCategory={handleCurrentCategory}
          />
        ))}
      </div>
      <div className="no-scrollbar flex max-h-220 flex-col gap-4 overflow-y-auto pt-3 pb-20">
        {data?.map((item) => (
          <ErrandList {...item} key={item.id} onRouter={handleRouter} />
        ))}
      </div>
    </div>
  );
}
