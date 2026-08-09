import { useParams, usePathname } from 'next/navigation';

export const useHistoryTab = () => {
  const pathname = usePathname();
  const { id } = useParams();
  return {
    pathname,
    id,
  };
};
