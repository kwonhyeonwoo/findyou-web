import { UseFormRegister } from "react-hook-form";
import AccountLabel from "../AccountLabel/AccountLabel";
import VerificationButton from "@/components/common/VerificationButton/VerificationButton";
import { ReigsterType } from "@/schema/auth.schema";

interface Props {
  name: keyof ReigsterType;
  label: string;
  placeholder: string;
  type: string;
  activeText?: string;
  register: UseFormRegister<ReigsterType>;
  onActive?: () => void;
}

export default function AccountInput({
  name,
  label,
  placeholder,
  type,
  register,
  activeText,
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
          {...register(name)}
        />
        {onActive && (
          <VerificationButton text={activeText ?? ""} onActive={onActive} />
        )}
      </div>
    </div>
  );
}
