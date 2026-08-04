import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { helperApplicationKeys } from '@/api/helper-application/helperApplicationKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useHelperAppliCreateMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: helperApplicationApi.postCreate,
    onSuccess: (data) => {
      console.log('hooks data', data);
      queryClient.invalidateQueries({ queryKey: helperApplicationKeys.all });
      toast.success('헬퍼에게 심부름 신청이 완료되었습니다.');
      // router.push('/history/apply');
    },
    onError: (error) => {
      console.log('error', error.message);
      toast.error(error.message);
    },
  });
};
