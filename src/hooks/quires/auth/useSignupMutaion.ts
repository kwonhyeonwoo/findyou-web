import { authApi } from "@/api/auth/authApi";
import { USER_KEYS } from "@/api/user/userKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSignupMutation = () => {
    const navigate = useRouter();
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: authApi.signup,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: USER_KEYS.all });
            toast.success(data.message);
            navigate.push('/login')
        },
        onError: (error: any) => {
            console.log('account error', error.message)
            toast.error(error.message)
        }
    })
    return mutation;
}