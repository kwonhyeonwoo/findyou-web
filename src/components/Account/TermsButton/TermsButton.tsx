import Image from "next/image";
import { useTermsCheck } from "./hooks/useTermsCheck";
import { ReigsterType } from "@/schema/auth.schema";

interface Props {
  name: keyof ReigsterType;
  text: string;
}

export default function TermsButton({ name, text }: Props) {
  const { isChecked, handleToggle } = useTermsCheck({ name });
  return (
    <button
      type="button"
      onClick={handleToggle}
      className="flex items-center gap-3 py-1 text-left"
    >
      <div
        className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${isChecked ? "border-black bg-black" : "border-[#E5E7EB] bg-white"}`}
      >
        {isChecked && (
          <Image
            src="/icon/check-icon.svg"
            alt="check-icon"
            width={12}
            height={12}
          />
        )}
      </div>
      <p className="text-sm text-[#464554]">{text}</p>
    </button>
  );
}
