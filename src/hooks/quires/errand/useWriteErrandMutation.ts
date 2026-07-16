import { errandApi } from "@/api/errand/errandApi";
import { ERRAND_KEYS } from "@/api/errand/errandKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useWriteErrandMutation = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    return useMutation({
        mutationFn: errandApi.write,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ERRAND_KEYS.lists(),
            })
            toast.success(data.message)
            router.push('/errand')
        }
    })
}