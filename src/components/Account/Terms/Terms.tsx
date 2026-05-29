"use client";

import { useForm } from "react-hook-form";
import TermsButton from "../TermsButton/TermsButton";
import { ReigsterType } from "@/schema/auth.schema";

export default function Terms() {
  // 💡 RHF에서 필요한 함수들을 쏙 빼옵니다.
  const { watch, setValue } = useForm<ReigsterType>();

  // 1. 각 약관의 현재 체크 상태를 실시간으로 감시(watch)합니다.
  const agreeUsage = watch("agreeUsage");
  const agreePrivacy = watch("agreePrivacy");
  const agreeMarketingMandatory = watch("agreeMarketingMandatory");
  const agreeMarketingOptional = watch("agreeMarketingOptional");

  // 2. 4개가 전부 체크되어 있는지 확인합니다. (전체 동의 불 켜기용)
  const isAllChecked =
    agreeUsage &&
    agreePrivacy &&
    agreeMarketingMandatory &&
    agreeMarketingOptional;

  // 3. [전체 동의] 버튼을 눌렀을 때 실행될 함수
  const handleAllAgreeClick = () => {
    // 현재 전부 체크되어 있다면 싹 다 꺼버리고, 하나라도 꺼져있다면 싹 다 켭니다.
    const nextValue = !isAllChecked;
    setValue("agreeUsage", nextValue, { shouldValidate: true });
    setValue("agreePrivacy", nextValue, { shouldValidate: true });
    setValue("agreeMarketingMandatory", nextValue, { shouldValidate: true });
    setValue("agreeMarketingOptional", nextValue, { shouldValidate: true });
  };

  // 배열에 RHF에 등록된 'name' 값을 매칭해 줍니다.
  const termsArr = [
    { name: "agreeUsage", text: "[필수] FINDYOU 이용약관 동의" },
    { name: "agreePrivacy", text: "[필수] 개인정보 수집 및 이용 동의" },
    { name: "agreeMarketingMandatory", text: "[필수] 마케팅 활용 동의" },
    { name: "agreeMarketingOptional", text: "[선택] 마케팅 활용 동의" },
  ];

  return (
    <div className="mt-8 flex flex-col">
      {/* 4. 전체 동의 버튼 */}
      <button
        type="button"
        onClick={handleAllAgreeClick}
        className="flex items-center gap-3 border-b border-b-[#C7C4D7] pb-4"
      >
        <div
          className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${isAllChecked ? "border-black bg-black" : "border-[#E5E7EB] bg-white"}`}
        >
          {isAllChecked && <span className="text-[10px] text-white">✓</span>}
        </div>
        <p className="font-medium text-[#0B1C30]">전체 동의합니다.</p>
      </button>

      {/* 5. 개별 약관 버튼 리스트 */}
      <div className="mt-4 flex flex-col gap-3">
        {termsArr.map((item) => (
          <TermsButton
            key={item.name}
            name={item.name} // 💡 RHF 등록용 이름을 전달
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}
