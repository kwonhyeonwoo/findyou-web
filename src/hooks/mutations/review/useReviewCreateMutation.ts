import { reviewApi } from "@/api/review/reviewApi"
import { reviewKeys } from "@/api/review/reviewKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useReviewCreateMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: reviewApi.createReview,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: reviewKeys.all })
        },
    })
}