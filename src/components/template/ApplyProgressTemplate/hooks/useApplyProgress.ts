import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import useApplicationCompleteMutation from '@/hooks/mutations/helper-application/useApplicationCompleteMutation';
import useGetAcceptedApplicationQuery from '@/hooks/quires/helper-application/useGetAcceptedApplicationQuery';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

function useApplyProgress() {
  const { id } = useParams();
  const { data, isLoading } = useGetAcceptedApplicationQuery(String(id));
  const { mutate, isPending } = useApplicationCompleteMutation();
  const handleApplicationComplete = (id: string) => {
    mutate(id);
  };
  return {
    data,
    isPending,
    isLoading,
    handleApplicationComplete,
  };
}

export default useApplyProgress;
