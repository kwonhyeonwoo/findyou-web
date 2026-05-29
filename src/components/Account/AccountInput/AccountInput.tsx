import React from "react";
import AccountLabel from "../AccountLabel/AccountLabel";
import VerificationButton from "@/components/common/VerificationButton/VerificationButton";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  activeText?: string;
  onChange: () => void;
  onActive?: () => void;
}

export default function AccountInput({
  label,
  placeholder,
  type,
  activeText,
  onChange,
  onActive,
}: Props) {
  return (
    <div>
      <AccountLabel label={label} />
      <div className="flex items-center gap-2">
        <input
          className="flex-1 border-b border-b-[#6B7280] px-3 py-[10px]"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        {onActive && (
          <VerificationButton text={activeText ?? ""} onActive={onActive} />
        )}
      </div>
    </div>
  );
}
