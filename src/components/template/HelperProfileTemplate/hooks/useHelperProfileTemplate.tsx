import { useGetHelperQuery } from '@/hooks/quires/helper/useGetHelperQuery';
import { useGetHelper } from '@/hooks/quires/user/useGetHelper';
import { useParams } from 'next/navigation';

export const useHelperProfileTemplate = () => {
  const { id } = useParams();
  const { data: helper } = useGetHelperQuery(String(id));

  return {
    helper,
  };
};
