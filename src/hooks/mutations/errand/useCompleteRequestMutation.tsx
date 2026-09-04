import { errandApi } from '@/api/errand/errandApi';
import { ERRAND_KEYS } from '@/api/errand/errandKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useCompleteRequestMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: errandApi.patchCompleteRequest,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ERRAND_KEYS.lists() });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
