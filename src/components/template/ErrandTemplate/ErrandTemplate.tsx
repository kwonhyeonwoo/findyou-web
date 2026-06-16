'use client'
import ErrandInput from '@/components/common/ErrandInput/ErrandInput';
import { useErrandSearch } from './hooks/useErrandSearch';
import CategoryTabs from '@/components/common/CategoryTabs/CategoryTabs';
import { useErrandCategory } from './hooks/useErrandCategory';
import { useErrandListsQuery } from '@/hooks/quires/errand/useErrandListsQuery';
import ErrandCard from '@/components/Errand/ErrandCard';
import { useErrandRouter } from './hooks/useErrandRouter';

export default function ErrandTemplate() {
    const {
        listTabs,
        onKeywordChange,
        onKeywordSubmit
    } = useErrandSearch();
    const {data} = useErrandListsQuery();
    const {handleRouter} = useErrandRouter();
    const {currentCategory, onCurrentCategory} = useErrandCategory();
  return (
    <div className="flex flex-col gap-4 mt-4">
        <ErrandInput 
            onKeywordChange={onKeywordChange} 
            onKeywordSubmit={onKeywordSubmit}
        />
        <div className="flex items-center gap-2 max-w-[480px] overflow-x-auto whitespace-nowrap  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {listTabs.map((item)=>(
                <CategoryTabs   
                    text={item.text} 
                    type={item.type} 
                    isActive={currentCategory === item.type} 
                    onCurrCategory={onCurrentCategory}
                />
            ))}
        </div>
        <div className="flex flex-col gap-4  max-h-220 pb-20  overflow-y-auto no-scrollbar">            
            {data?.map((item)=>(
                <ErrandCard 
                    {...item} 
                    key={item.id}
                    onRouter={handleRouter}
                />
            ))}
        </div>
    </div>
  )
}
