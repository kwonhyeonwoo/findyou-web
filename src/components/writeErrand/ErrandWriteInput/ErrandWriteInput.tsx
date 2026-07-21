import { ErrandRegisterType } from '@/schema/errand.schema';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  name: keyof ErrandRegisterType;
  value?: string;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<ErrandRegisterType>;
}

export default function ErrandWriteInput({
  label,
  placeholder,
  name,
  minLength,
  maxLength,
  value,
  readonly,
  register,
  onChange,
}: Props) {
  return (
    <div className="flex flex-col justify-center gap-2">
      <label className="text-[12px] text-[#464554]">{label}</label>
      <input
        value={value}
        {...register(name)}
        type="text"
        readOnly={readonly}
        minLength={minLength}
        maxLength={maxLength}
        {...(onChange && { onChange })}
        placeholder={placeholder}
        className={`w-full flex-1 rounded-[8px] border border-[#C7C4D7] px-4 py-3 ${
          readonly ? 'cursor-pointer bg-gray-50' : '' // 읽기전용일 때 마우스 커서 스타일 스타일링
        }`}
      />
    </div>
  );
}
