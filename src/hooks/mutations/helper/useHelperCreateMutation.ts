import { helperApi } from "@/api/helper/helperApi"
import { HELPER_KEYS } from "@/api/helper/helperKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useHelperCreateMutation = () => {
    const router = useRouter();

    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: helperApi.createHelper,
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: HELPER_KEYS.all })
            console.log('success', data);
            toast.success('헬퍼 등록이 완료되었습니다.');
            router.push('/')
        },
        onError: (error) => {
            console.error('error', error);
        }
    })
}