import { ERRAND_CATEGORIES } from '@/interfaces/category.enum';

interface Props<T> {
  type: T;
  currCategory: T;
  text: string;
  handleCurrentCategory: (type: T) => void;
}

export default function CategoryTab<T>({
  type,
  currCategory,
  text,
  handleCurrentCategory,
}: Props<T>) {
  console.log('type', type);
  console.log('curr', currCategory);
  return (
    <button
      onClick={() => handleCurrentCategory(type)}
      type="button"
      className={`flex shrink-0 items-center justify-center rounded-full border border-[#C7C4D7] px-4 py-2 text-[14px] ${
        currCategory === type
          ? 'bg-teal-light border-teal-primary text-teal-primary font-bold'
          : 'text-[#464554]'
      }`}
    >
      {text}
    </button>
  );
}
