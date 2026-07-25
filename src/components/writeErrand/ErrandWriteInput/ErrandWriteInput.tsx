import { ErrandRegisterType } from '@/schema/errand.schema';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends FieldValues> {
  label: string;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  name: Path<T>;
  value?: string;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<T>;
}

export default function ErrandWriteInput<T extends FieldValues>({
  label,
  placeholder,
  name,
  minLength,
  maxLength,
  value,
  readonly,
  register,
  onChange,
}: Props<T>) {
  return (
    <div className="flex flex-col justify-center gap-2">
      <label className="text-[12px] text-[#464554]">{label}</label>
      <input
        value={value}
        type="text"
        readOnly={readonly}
        minLength={minLength}
        maxLength={maxLength}
        {...(onChange && { onChange })}
        {...register(name)}
        placeholder={placeholder}
        className={`w-full flex-1 rounded-[8px] border border-[#C7C4D7] px-4 py-3 ${
          readonly ? 'cursor-pointer bg-gray-50' : '' // 읽기전용일 때 마우스 커서 스타일 스타일링
        }`}
      />
    </div>
  );
}
