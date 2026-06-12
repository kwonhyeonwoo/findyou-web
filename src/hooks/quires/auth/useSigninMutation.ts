'use client'
import { authApi } from "@/api/auth/authApi";
import { AUTH_KEYS } from "@/api/auth/authKeys";
import { USER_KEYS } from "@/api/user/userKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSigninMutation = () => {
    const navigate = useRouter();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: authApi.signin,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: USER_KEYS.detail(data.id) });
            toast.success(data.message);
            navigate.push('/');
        },
    })
    return mutation;
}