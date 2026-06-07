'use client'
import { authApi } from "@/api/auth/authApi";
import { AUTH_KEYS } from "@/api/auth/authKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";

export const useSigninMutation = () => {
    const navigate = useRouter();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: authApi.signin,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: AUTH_KEYS.detail(data.id) });
            navigate.push('/');
        },
    })
    return mutation;
}