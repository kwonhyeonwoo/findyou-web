import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function useRejectedMutation(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: helperApplicationApi.patchRejectedApplication,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: HELPER_APPLICATION_KEYS.myLists(id),
      });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
