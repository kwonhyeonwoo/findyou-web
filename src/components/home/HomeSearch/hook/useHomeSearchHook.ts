'use client'
import { useForm } from "react-hook-form"

export const useHomeSearchHook = () => {
    const { register, handleSubmit, setValue } = useForm<{ keyword: string }>(
        {
            defaultValues: {
                keyword: "",
            }
        }
    );
    const onSubmit = (data: { keyword: string }) => {
        console.log('search Text:', data.keyword)
        setValue('keyword', "")
    }
    return {
        register,
        onSubmit,
        handleSubmit,
    }
}