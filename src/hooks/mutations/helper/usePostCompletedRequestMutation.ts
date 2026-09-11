import { helperPostApi } from '@/api/helper-post/helperPostApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function usePostCompletedRequestMutation(id: string) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: helperPostApi.postCompletedRequest,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: HELPER_APPLICATION_KEYS.all });
      toast.success(data.message);
      router.push('/history/application-history?type=helper');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
