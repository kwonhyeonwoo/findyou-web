import { errandApi } from "@/api/errand/errandApi";
import { ERRAND_KEYS } from "@/api/errand/errandKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useErrandCompleteMutation = (id: string, nickName: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: errandApi.postComplete,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ERRAND_KEYS.detail(id) });
      router.push(`/helper/review?nickName=${nickName}&id=${id}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
