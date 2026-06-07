import { authApi } from "@/api/auth/authApi"
import { AUTH_KEYS } from "@/api/auth/authKeys"
import { useQuery } from "@tanstack/react-query"

export const useMeQuery = () => {
    return useQuery({
        queryKey: AUTH_KEYS.me,
        queryFn: authApi.me,
    })
}