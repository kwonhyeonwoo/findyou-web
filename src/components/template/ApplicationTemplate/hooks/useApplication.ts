import { useMyApplicationsQuery } from '@/hooks/quires/errand-application/useMyApplicationsQuery';
import { useRouter } from 'next/navigation';

export const useApplication = () => {
  const router = useRouter();
  const { data, isLoading } = useMyApplicationsQuery();

  const handleActive = (id: string) => {
    router.push(`/history/errand/${id}`);
  };

  return {
    data,
    handleActive,
  };
};
