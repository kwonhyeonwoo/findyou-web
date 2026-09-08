import { reviewApi } from "@/api/review/reviewApi"
import { reviewKeys } from "@/api/review/reviewKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"

export const useCreateErrandReview = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: reviewApi.createErrandReview,
        onSuccess: (data) => {
            toast.success(data.message);
            queryClient.invalidateQueries({
                queryKey: reviewKeys.errand
            })
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}