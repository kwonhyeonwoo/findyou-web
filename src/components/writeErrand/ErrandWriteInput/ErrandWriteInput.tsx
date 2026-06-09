import { ErrandRegisterType } from "@/schema/errand.schema";
import { UseFormRegister } from "react-hook-form";

interface Props{
    label:string;
    placeholder:string;
    minLength?:number;
    maxLength?:number;
    name:keyof ErrandRegisterType;
    register:UseFormRegister<ErrandRegisterType>
}


export default function ErrandWriteInput({
    label,
    placeholder,
    name,
    minLength,
    maxLength,
    register
}:Props) {
  return (
    <div className="flex flex-col justify-center gap-2">
        <label className="text-[12px] text-[#464554]">{label}</label>
        <input 
            type="text" 
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            className="w-full flex-1 border px-4 py-3 border-[#C7C4D7] rounded-[8px]"
            {...register(name)}
        />
    </div>
  )
}
