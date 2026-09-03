import { errandApplicationApi } from '@/api/errand-application/errandApplicationApi';
import { ERRAND_APPLICAION_KEYS } from '@/api/errand-application/errandApplicationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useApplicationCreateMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: errandApplicationApi.create,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ERRAND_APPLICAION_KEYS.lists(),
      });
      toast.success(data.message);
      router.push('/history/application-detail?type=errand');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
