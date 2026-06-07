import { authApi } from "@/api/auth/authApi";
import { AUTH_KEYS } from "@/api/auth/authKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";

export const useSignupMutation = () => {
    const navigate = useRouter();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: authApi.signup,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: AUTH_KEYS.all });
            navigate.push('/login')
            console.log('요청성공 !', data)
        },
    })
    return mutation;
}