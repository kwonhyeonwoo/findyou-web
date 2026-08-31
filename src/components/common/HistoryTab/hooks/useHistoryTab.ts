import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';

export const useHistoryTab = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { id } = useParams();

  const handleSagmentActive = (type: string) => {
    router.push(`/history/post?type=${type}`);
  };
  return {
    pathname,
    id,
    searchParams,
    handleSagmentActive,
  };
};
