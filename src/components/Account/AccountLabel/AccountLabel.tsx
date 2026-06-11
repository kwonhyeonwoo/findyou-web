import React from "react";
interface Props {
  label: string;
  error?: string;
}
export default function AccountLabel({ label, error }: Props) {
  return (
    <div className="flex items-center gap-1 text-[14px] text-[#464554]">
      <p>
        {label} <span className="text-[#BA1A1A]">*</span>
      </p>
      <p className="text-[#BA1A1A]">{error}</p>
    </div>
  );
}
