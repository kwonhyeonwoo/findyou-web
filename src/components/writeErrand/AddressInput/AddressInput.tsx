import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import ErrandWriteInput from '../ErrandWriteInput/ErrandWriteInput';

interface Props<T extends FieldValues> {
  value: string;
  register: UseFormRegister<T>;
  handleIsOpen: () => void;
}

export default function AddressInput<T extends FieldValues>({
  value,
  register,
  handleIsOpen,
}: Props<T>) {
  return (
    <div className="flex gap-2">
      <div className="w-full">
        <ErrandWriteInput
          label="주소"
          placeholder="주소를 입력해주세요"
          name={'address' as Path<T>}
          value={value}
          readonly={true}
          register={register}
        />
      </div>
      <button
        onClick={handleIsOpen}
        className="mt-auto h-[46px] w-[82px] self-center rounded-[8px] bg-black px-4 py-3 text-[10px] font-bold text-white"
      >
        주소검색
      </button>
    </div>
  );
}
