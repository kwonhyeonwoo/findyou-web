import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends FieldValues> {
  register: UseFormRegister<T>;
  textLength: number;
  name: Path<T>;
}

export default function ErrandTextarea<T extends FieldValues>({
  register,
  name,
  textLength,
}: Props<T>) {
  return (
    <div className="relative flex flex-col justify-center gap-2">
      <label className="text-[12px] text-[#464554]">상세 내용</label>
      <textarea
        placeholder="심부름 내용을 상세히 작성해 주세요"
        maxLength={200}
        className="h-34 w-full resize-none rounded-[8px] border border-[#C7C4D7] px-3 py-4 text-[15px] outline-none"
        {...register(name)}
      />
      <p className="absolute right-3 bottom-2 text-[12px] text-[#464554]">
        {textLength}/200
      </p>
    </div>
  );
}
