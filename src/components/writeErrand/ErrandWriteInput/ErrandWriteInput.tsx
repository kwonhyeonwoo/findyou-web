import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends FieldValues> {
  label: string;
  placeholder: string;
  name: Path<T>;
  value?: string;
  minLength?: number;
  maxLength?: number;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegister<T>;
}

export default function ErrandWriteInput<T extends FieldValues>({
  label,
  placeholder,
  name,
  value,
  readonly,
  minLength,
  maxLength,
  register,
  onChange,
}: Props<T>) {
  // onChange가 있으면 controlled, 없으면 register 사용
  const controlledProps = onChange ? { value, onChange } : register?.(name);

  return (
    <div className="flex flex-col justify-center gap-2">
      <label className="text-[12px] text-[#464554]">{label}</label>
      <input
        type="text"
        minLength={minLength}
        maxLength={maxLength}
        readOnly={readonly}
        placeholder={placeholder}
        {...controlledProps}
        className={`w-full flex-1 rounded-[8px] border border-[#C7C4D7] px-4 py-3 ${readonly ? 'cursor-pointer bg-gray-50' : ''}`}
      />
    </div>
  );
}
