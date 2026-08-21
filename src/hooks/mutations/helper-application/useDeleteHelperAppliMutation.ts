import { helperApplicationApi } from "@/api/helper-application/helperApplicationApi";
import { HELPER_APPLICATION_KEYS } from "@/api/helper-application/helperApplicationKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteHelperAppliMutation() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: helperApplicationApi.deleteApplication,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: HELPER_APPLICATION_KEYS.lists() })
            toast.success(data.message)
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}