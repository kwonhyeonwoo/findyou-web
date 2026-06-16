import { authApi } from "@/api/auth/authApi"
import { AUTH_KEYS } from "@/api/auth/authKeys"
import { USER_KEYS } from "@/api/user/userKeys";
import { useQuery } from "@tanstack/react-query"

export const useMeQuery = () => {
    return useQuery({
        queryKey:USER_KEYS.me(),
        queryFn: authApi.me,
    })
}