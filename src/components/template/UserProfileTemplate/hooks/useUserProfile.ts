import { useUserQuery } from '@/hooks/quires/user/useUserQuery';
import { useParams } from 'next/navigation';

export default function useUserProfile() {
  const { id } = useParams();
  const { data, isLoading } = useUserQuery(String(id));
  return {
    data,
    isLoading,
  };
}
