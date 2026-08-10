import useGetReceivedApplicationQuery from '@/hooks/quires/helper/useGetReceivedApplicationQuery';
import { useParams } from 'next/navigation';

export default function useReceivedDetail() {
  // 수락, 거절 버튼도 만들어야함
  const { id } = useParams();
  const { data, isLoading } = useGetReceivedApplicationQuery(String(id) ?? '');
  return {
    data,
    isLoading,
  };
}
