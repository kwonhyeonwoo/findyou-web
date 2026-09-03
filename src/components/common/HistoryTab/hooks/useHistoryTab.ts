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
  console.log('pathname', pathname)
  const handleSagmentActive = (type: string) => {
    router.push(`${pathname}?type=${type}`);
  };
  return {
    pathname,
    id,
    searchParams,
    handleSagmentActive,
  };
};
