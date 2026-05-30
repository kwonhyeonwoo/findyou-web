'use client'
import { ReigsterType } from "@/schema/auth.schema";
import { useFormContext } from "react-hook-form";

export const useTermsCheck = ({name}:{name:keyof ReigsterType})=>{
    const {watch,setValue} = useFormContext<ReigsterType>();
    const isChecked = watch(name);

    const handleToggle = ()=>{
        setValue(name,!isChecked, {
            shouldValidate:true
        })
    };

    return{
        isChecked, handleToggle
    }
}