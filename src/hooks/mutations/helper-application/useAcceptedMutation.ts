import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function useAcceptedMutation({
  appliId,
  clientId,
}: {
  appliId: string;
  clientId: string;
}) {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: helperApplicationApi.patchAcceptedApplication,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: HELPER_APPLICATION_KEYS.myLists(appliId),
      });
      toast.success(data.message);
      // 주소 이동
      router.push(`/received/client/${clientId}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
