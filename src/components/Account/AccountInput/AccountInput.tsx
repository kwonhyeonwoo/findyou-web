import { FieldError, UseFormRegister } from "react-hook-form";
import AccountLabel from "../AccountLabel/AccountLabel";
import VerificationButton from "@/components/common/VerificationButton/VerificationButton";
import { ReigsterType } from "@/schema/auth.schema";

interface Props {
  name: keyof ReigsterType;
  label: string;
  placeholder: string;
  type: string;
  activeText?: string;
  maxLength?: number;
  minLength?: number;
  error?: FieldError;
  register: UseFormRegister<ReigsterType>;
  onActive?: () => void;
}

export default function AccountInput({
  name,
  label,
  placeholder,
  type,
  activeText,
  maxLength,
  minLength,
  error,
  onActive,
  register,
}: Props) {
  return (
    <div>
      <AccountLabel label={label} error={error?.message} />
      <div className="flex items-center gap-2">
        <input
          className="flex-1 border-b border-b-[#6B7280] px-3 py-[10px]"
          type={type}
          maxLength={maxLength}
          minLength={minLength}
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
