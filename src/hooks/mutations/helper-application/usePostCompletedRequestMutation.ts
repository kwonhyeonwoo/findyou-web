import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function usePostCompletedRequestMutation(id: string) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: helperApplicationApi.postCompletedRequested,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: HELPER_APPLICATION_KEYS.detail(id),
      });
      toast.success(data.message);
      //   router.push('/hisotry/received');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
