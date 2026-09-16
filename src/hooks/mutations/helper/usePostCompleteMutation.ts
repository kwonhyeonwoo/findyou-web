import { helperPostApi } from '@/api/helper-post/helperPostApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function usePostCompleteMutation(id: string) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: helperPostApi.postComplete,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: HELPER_APPLICATION_KEYS.all });
      toast.success(data.message);
      router.push(`/helper/${id}/review`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
