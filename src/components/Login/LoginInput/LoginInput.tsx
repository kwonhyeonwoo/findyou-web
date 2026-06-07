import { AuthCommonSchema } from "@/schema/auth.schema";
import { UseFormRegister } from "react-hook-form";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  register: UseFormRegister<AuthCommonSchema>;
}

export default function LoginInput({
  name,
  type,
  placeholder,
  minLength,
  maxLength,
  register,
}: Props) {
  return (
    <input
      className="box-border w-full border-b border-b-[#C7C4D7] px-2 py-2"
      placeholder={placeholder}
      type={type}
      minLength={minLength}
      maxLength={maxLength}
      {...register(name as keyof AuthCommonSchema)}
    />
  );
}
