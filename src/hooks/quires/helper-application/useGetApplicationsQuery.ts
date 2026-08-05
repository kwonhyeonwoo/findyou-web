import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { helperApplicationKeys } from '@/api/helper-application/helperApplicationKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetApplicationsQuery = () => {
  return useQuery({
    queryFn: () => helperApplicationApi.getHelperApplications(),
    queryKey: helperApplicationKeys.lists(),
  });
};
