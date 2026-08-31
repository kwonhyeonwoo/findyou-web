import { HELPER_POST_KEYS } from '@/api/helper-post/helperPostKeys';
import { reviewApi } from '@/api/review/reviewApi';
import { reviewKeys } from '@/api/review/reviewKeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useReviewCreateMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: reviewApi.createHelperPostReview,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: reviewKeys.helper });
      queryClient.invalidateQueries({ queryKey: HELPER_POST_KEYS.lists() });
      router.push('/');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
