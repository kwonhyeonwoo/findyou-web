import { HELPER_REVIEW_TAGS } from "@/constants/helper-review.constant";
import Image from "next/image";

interface Props {
  selectedTags: string[];
  onTagClick: (tag: string) => void;
}

function ReviewTagSelector({ selectedTags, onTagClick }: Props) {
  return (
    <div className="flex flex-col gap-5 border-b border-b-[#F2F2F2] p-6">
      <p className="text-[20px] font-bold">어떤 점이 좋았나요?</p>
      <div className="flex flex-col gap-4">
        {HELPER_REVIEW_TAGS.map((item) => (
          <button
            onClick={() => onTagClick(item.type)}
            key={item.type}
            className="flex items-center gap-2"
          >
            <div
              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                selectedTags.includes(item.type)
                  ? "bg-black"
                  : "border border-[#E5E7EB] bg-white"
              }`}
            >
              {selectedTags.includes(item.type) && (
                <Image
                  src="/icon/check-icon.svg"
                  alt={"check-icon"}
                  width={14}
                  height={14}
                />
              )}
            </div>
            <p className="font-medium">{item.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ReviewTagSelector;
