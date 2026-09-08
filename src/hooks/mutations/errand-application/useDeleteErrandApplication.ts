import { errandApplicationApi } from '@/api/errand-application/errandApplicationApi';
import { ERRAND_APPLICAION_KEYS } from '@/api/errand-application/errandApplicationKeys';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useDeleteErrandApplication = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: errandApplicationApi.delete,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ERRAND_APPLICAION_KEYS.lists(),
      });
      router.push(`/history/application-history?type=errand`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
