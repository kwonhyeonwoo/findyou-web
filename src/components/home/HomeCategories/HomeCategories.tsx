'use client';
import { HOME_CATEGORIES } from '@/constants/home-constants';
import { useHomeCategoryHook } from './hooks/useHomeCategoryHook';

export default function HomeCategories() {
  const { handleCategoryClick } = useHomeCategoryHook();
  return (
    <div className="grid grid-cols-4 gap-4">
      {HOME_CATEGORIES.map(({ text, type, img, bgColor }) => (
        <button
          onClick={() => handleCategoryClick(type)}
          key={type}
          className="flex flex-col items-center justify-center gap-2"
        >
          <div
            className={`h-14 w-14 rounded-full ${bgColor} flex items-center justify-center`}
          >
            <img
              src={`/category/${img}.svg`}
              alt={img}
              className="object-none"
            />
          </div>
          <p className="text-[12px]">{text}</p>
        </button>
      ))}
    </div>
  );
}
