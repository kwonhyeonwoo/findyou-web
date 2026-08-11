import { useCategoryTabs } from './hooks/useCategoryTabs';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import { CATEGORIES_ENUM } from '@/interfaces/category.enum';
import CategoryTab from '../CategoryTab/CategoryTab';
import { CATEGORY_TABS } from '@/constants/category-constants';

interface Props<T extends FieldValues> {
  currCategory: CATEGORIES_ENUM;
  setValue: UseFormSetValue<T>;
}

export default function CategoryTas<T extends FieldValues>({
  currCategory,
  setValue,
}: Props<T>) {
  const { handleCurrentCategory } = useCategoryTabs({ setValue });
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[12px] text-[#464554]">카테고리 선택</p>
      <div className="flex flex-wrap gap-2">
        {CATEGORY_TABS.map((item) => (
          <CategoryTab
            key={item.type}
            type={item.type}
            currCategory={currCategory}
            text={item.text}
            handleCurrentCategory={handleCurrentCategory}
          />
        ))}
      </div>
    </div>
  );
}
