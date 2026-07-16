interface Props<T> {
  text: string;
  type: T | "all";
  isActive: boolean;
  onCurrCategory: (type: T | "all") => void;
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
      className={`flex items-center justify-center rounded-full border px-4 py-2 text-[14px] ${
        isActive || type === "all"
          ? "border-none bg-black font-bold text-white"
          : isActive
            ? "border-[#C7C4D7] text-[#464554]"
            : "border-[#C7C4D7] text-[#464554]"
      }`}
    >
      {text}
    </button>
  );
}
