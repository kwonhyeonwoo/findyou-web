import { errandApplicationApi } from "@/api/errand-application/errandApplicationApi"
import { ERRAND_APPLICAION_KEYS } from "@/api/errand-application/errandApplicationKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useApplicationStatusMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: errandApplicationApi.postStatus,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ERRAND_APPLICAION_KEYS.lists()
            })
            toast.success(data.message);
        }
    })
}