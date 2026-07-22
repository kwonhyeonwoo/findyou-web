import { UseFormRegister } from 'react-hook-form';
import { ErrandRegisterType } from '@/schema/errand.schema';
import ErrandWriteInput from '../ErrandWriteInput/ErrandWriteInput';

interface Props {
  value: string;
  register: UseFormRegister<ErrandRegisterType>;
  handleIsOpen: () => void;
}

export default function AddressInput({ value, register, handleIsOpen }: Props) {
  return (
    <div className="flex gap-2">
      <div className="w-full">
        <ErrandWriteInput
          label="주소"
          placeholder="주소를 입력해주세요"
          name="address"
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
