import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function useRejectedMutation() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: helperApplicationApi.patchRejectedApplication,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: HELPER_APPLICATION_KEYS.lists(),
      });
      toast.success(data.message);
      router.push('/history/received')
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
