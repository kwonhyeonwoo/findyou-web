import { useGetHelperQuery } from '@/hooks/quires/helper/useGetHelperQuery';
import { useParams } from 'next/navigation';

export const useHelperProfileTemplate = () => {
  const { id } = useParams();
  const { data } = useGetHelperQuery(String(id));

  return {
    data,
  };
};
