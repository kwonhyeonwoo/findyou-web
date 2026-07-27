import { CATEGORY_TABS } from '@/constants/common.-constants';
import { useCategoryTabs } from './hooks/useCategoryTabs';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface Props<T extends FieldValues> {
  currCategory: string;
  setValue: UseFormSetValue<T>;
}

export default function CategoryTab<T extends FieldValues>({
  currCategory,
  setValue,
}: Props<T>) {
  const { handleCurrentCategory } = useCategoryTabs({ setValue });
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[12px] text-[#464554]">카테고리 선택</p>
      <div className="flex flex-wrap gap-2">
        {CATEGORY_TABS.map((item) => (
          <button
            key={item.type}
            onClick={() => handleCurrentCategory(item.type)}
            type="button"
            className={`flex items-center justify-center rounded-full border border-[#C7C4D7] px-4 py-2 text-[14px] ${
              currCategory === item.type
                ? 'bg-teal-light border-teal-primary text-teal-primary font-bold'
                : 'text-[#464554]'
            }`}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
}
