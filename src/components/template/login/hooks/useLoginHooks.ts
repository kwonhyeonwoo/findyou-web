import { useSigninMutation } from "@/hooks/quires/auth/useSigninMutation"
import { ISigninRequest } from "@/interfaces/auth.interface";
import { authCommonSchema, AuthCommonSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useLoginHooks = () => {
    const { mutate, isPending } = useSigninMutation();
    const { register, handleSubmit, formState: { isValid } } = useForm<AuthCommonSchema>({
        resolver: zodResolver(authCommonSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })
    const onSubmit = (data: ISigninRequest) => {
        mutate(data);
    }
    return {
        isPending,
        isValid,
        onSubmit,
        register,
        handleSubmit,
    }
}