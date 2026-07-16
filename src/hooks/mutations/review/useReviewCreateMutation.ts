import { reviewApi } from "@/api/review/reviewApi"
import { reviewKeys } from "@/api/review/reviewKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";

export const useReviewCreateMutation = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: reviewApi.createReview,
        onSuccess: () => {
            router.push('/')
            queryClient.invalidateQueries({ queryKey: reviewKeys.all })
        },
    })
}