// src/components/TermsButton/TermsButton.tsx
"use client";

import { ReigsterType } from "@/schema/auth.schema";
import { useForm } from "react-hook-form";

interface Props {
  name: string; // "agreeUsage" 같은 RHF 필드명
  text: string;
}

export default function TermsButton({ name, text }: Props) {
  const { watch, setValue } = useForm<ReigsterType>();

  // 내 버튼이 현재 체크되어 있는지 실시간 감시
  const isChecked = watch(name as keyof ReigsterType);

  const handleToggle = () => {
    // 클릭하면 기존 상태를 반대로 뒤집음
    setValue(name as keyof ReigsterType, !isChecked, { shouldValidate: true });
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex items-center gap-3 py-1 text-left"
    >
      <div
        className={`flex h-4 w-4 items-center justify-center rounded-full border transition-colors ${isChecked ? "border-black bg-black" : "border-[#E5E7EB] bg-white"}`}
      >
        {isChecked && <span className="text-[10px] text-white">✓</span>}
      </div>
      <p className="text-sm text-[#464554]">{text}</p>
    </button>
  );
}
