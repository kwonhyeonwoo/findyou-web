import React from "react";
interface Props {
  label: string;
}
export default function AccountLabel({ label }: Props) {
  return (
    <div className="flex items-center gap-1 text-[14px] text-[#464554]">
      {label} <span className="text-[#BA1A1A]">*</span>
    </div>
  );
}
