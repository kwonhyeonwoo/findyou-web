import { useWriteErrandMutation } from "@/hooks/quires/errand/useWriteErrandMutation";
import { ErrandCategory, errandRegisterSchema, ErrandRegisterType } from "@/schema/errand.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

export const useWriteForm = () => {
    const { 
        control, 
        formState: { errors }, 
        register, 
        handleSubmit, 
        setValue, 
        watch, 
    } = useForm<ErrandRegisterType>({
        resolver: zodResolver(errandRegisterSchema),
    });
    const {mutate} = useWriteErrandMutation();
    const handleWriteSubmit = (data: ErrandRegisterType) => {
        console.log('submit data',data)
        mutate(data);
        
    }
    const handleCurrCategory = (type: ErrandCategory) => {
        setValue('category', type)
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/[^0-9]/g, "");
        setValue("price", rawValue);
    };
    return {
        control,
        handlePriceChange,
        useWatch,
        register,
        handleSubmit,
        handleCurrCategory,
        handleWriteSubmit,
        setValue,
        watch,
    }
}