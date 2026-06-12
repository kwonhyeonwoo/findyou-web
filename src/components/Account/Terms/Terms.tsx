import Image from "next/image";
import TermsButton from "../TermsButton/TermsButton";
import { useTerms } from "./hooks/useTerms";

export default function Terms() {
  const { isAllChecked, handleAllAgreeClick, termsList } = useTerms();
  return (
    <div className="mt-8 mb-12 flex flex-col">
      {/* 전체 동의 버튼 */}
      <button
        type="button"
        onClick={handleAllAgreeClick}
        className="flex items-center gap-3 border-b border-b-[#C7C4D7] pb-4"
      >
        <div
          className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${isAllChecked ? "border-black bg-black" : "border-[#E5E7EB] bg-white"}`}
        >
          {isAllChecked && (
            <Image
              src="/icon/check-icon.svg"
              alt="check-icon"
              width={12}
              height={12}
            />
          )}
        </div>
        <p className="font-medium text-[#0B1C30]">전체 동의합니다.</p>
      </button>

      {/* 개별 약관 버튼 리스트 */}
      <div className="mt-4 flex flex-col gap-3">
        {termsList.map((item) => (
          <TermsButton key={item.name} name={item.name} text={item.text} />
        ))}
      </div>
    </div>
  );
}
