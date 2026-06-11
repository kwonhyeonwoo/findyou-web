import { authApi } from "@/api/auth/authApi";
import { AUTH_KEYS } from "@/api/auth/authKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSignupMutation = () => {
    const navigate = useRouter();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: authApi.signup,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: AUTH_KEYS.all });
            toast.success(data.message);
            navigate.push('/login')
        },
        onError: (error) => {
            console.log('account error', error)
        }
    })
    return mutation;
}