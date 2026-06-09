import { ErrandCategory, errandRegisterSchema, ErrandRegisterType } from "@/schema/errand.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

export const useWriteForm = ()=>{
    const {register, handleSubmit,control, setValue } = useForm<ErrandRegisterType>({
        resolver:zodResolver(errandRegisterSchema),
    });
    const handleWriteSubmit = (data:ErrandRegisterType)=>{
        console.log('write submit',data);
    }
    const handleCurrCategory = ( type:ErrandCategory)=>{
        setValue('category',type)
    };

    return {
        useWatch,
        register, 
        handleSubmit, 
        handleCurrCategory,
        handleWriteSubmit,
        control,
    }
}