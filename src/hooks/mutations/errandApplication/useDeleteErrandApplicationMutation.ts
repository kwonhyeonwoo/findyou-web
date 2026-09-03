import { errandApplicationApi } from "@/api/errand-application/errandApplicationApi";
import { ERRAND_APPLICAION_KEYS } from "@/api/errand-application/errandApplicationKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useDeleteErrandApplicationMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: errandApplicationApi.delete,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({ queryKey: ERRAND_APPLICAION_KEYS.lists() })
        },
        onError: (error) => {
            console.log('error', error)
        }
    })
}