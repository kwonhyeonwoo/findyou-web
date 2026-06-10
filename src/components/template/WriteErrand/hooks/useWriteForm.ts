import { ErrandCategory, errandRegisterSchema, ErrandRegisterType } from "@/schema/errand.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";

export const useWriteForm = () => {
    const { register, handleSubmit, control, setValue, watch, formState: { errors } } = useForm<ErrandRegisterType>({
        resolver: zodResolver(errandRegisterSchema),
    });
    const handleWriteSubmit = (data: ErrandRegisterType) => {
        console.log('write submit', data);
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