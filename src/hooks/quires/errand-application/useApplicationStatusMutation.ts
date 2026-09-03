import { errandApplicationApi } from '@/api/errand-application/errandApplicationApi';
import { ERRAND_APPLICAION_KEYS } from '@/api/errand-application/errandApplicationKeys';
import { ERRAND_KEYS } from '@/api/errand/errandKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useApplicationStatusMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: errandApplicationApi.updatedStatus,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: [...ERRAND_APPLICAION_KEYS.lists(), ...ERRAND_KEYS.lists()],
      });
      toast.success(data.message);
      // router.push(`/errand/progress/${}`)
    },
    onError: (error: any) => {
      console.log('error', error);
      toast.error(error.response.data.message);
    },
  });
};
