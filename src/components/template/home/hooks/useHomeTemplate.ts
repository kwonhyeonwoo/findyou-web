import { useErrandListsQuery } from '@/hooks/quires/errand/useErrandListsQuery';
import { useGetHelpersQuery } from '@/hooks/quires/helper/useGetHelpersQuery';
import { useRouter } from 'next/navigation';

export const useHomeTemplate = () => {
  const router = useRouter();
  const { data: helpers } = useGetHelpersQuery();
  const { data: liveErrand } = useErrandListsQuery({ limit: '3' });

  const handleHelperProfile = (helperId: string) => {
    router.push(`/helper/${helperId}`);
  };
  return {
    liveErrand,
    helpers,
    handleHelperProfile,
  };
};
