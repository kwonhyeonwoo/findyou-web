import { useGetApplicationsQuery } from '@/hooks/quires/helper-application/useGetApplicationsQuery';
import { useRouter } from 'next/navigation';

export const useApplication = () => {
  const router = useRouter();
  const { data, isLoading } = useGetApplicationsQuery();
  console.log('data', data);
  const handleActive = (id: string) => {
    router.push(`/history/errand/${id}`);
  };

  return {
    data,
    handleActive,
  };
};
