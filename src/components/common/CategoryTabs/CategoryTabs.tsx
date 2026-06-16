
interface Props<T> {
  text: string;
  type: T;
  isActive: boolean;
  onCurrCategory: (type: T) => void;
}

export default function CategoryTabs<T>({
  text,
  type,
  isActive,
  onCurrCategory,
}: Props<T>) {
  return (
    <button
      onClick={() => onCurrCategory(type)}
      type="button"
      className={`flex items-center justify-center rounded-full border border-[#C7C4D7] px-4 py-2 text-[14px] text-[#464554] ${
        isActive ? "border border-[#2A14B4] bg-[#2A14B4]/10 text-[#2A14B4]" : ""
      } `}
    >
      {text}
    </button>
  );
}
