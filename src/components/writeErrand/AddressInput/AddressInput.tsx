import ErrandWriteInput from '../ErrandWriteInput/ErrandWriteInput';
import { UseFormRegister } from 'react-hook-form';
import { ErrandRegisterType } from '@/schema/errand.schema';

interface Props{
    value:string;
    register:UseFormRegister<ErrandRegisterType>;
    handleIsOpen:()=>void;
}

export default function AddressInput({value,register,handleIsOpen}:Props) {
  return (
    <div className="flex  gap-2">
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
        <button onClick={handleIsOpen} className="w-[82px] h-[46px]  self-center px-4 py-3 bg-black text-[10px] text-white rounded-[8px] mt-auto font-bold ">
            주소검색
        </button>
    </div>
  )
}
