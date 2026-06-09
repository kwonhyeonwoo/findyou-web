import { ErrandCategory, ErrandRegisterType } from '@/schema/errand.schema';
import { UseFormRegister } from 'react-hook-form';

interface Props{
  text:string;
  type:ErrandCategory;
  isActive:boolean;
  onCurrCategory:(type:ErrandCategory)=>void;
}

export default function ErrandWriteCategory({
  text,
  type,
  isActive,
  onCurrCategory,
}:Props) {
  return (
    <button 
      onClick={()=>onCurrCategory(type)}
      type='button'
      className={`py-2 px-4  rounded-full border text-[14px] text-[#464554] border-[#C7C4D7] flex items-center justify-center
        ${isActive
          ?"bg-[#2A14B4]/10 border border-[#2A14B4] text-[#2A14B4]"
          :""
        } 
        `}
    >
      {text}
    </button>
  )
}
