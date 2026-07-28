import { ErrandCategory } from '@/schema/errand.schema';
import { useRouter, useSearchParams } from 'next/navigation';

export const useErrandCategory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const onCurrentCategory = (type: ErrandCategory | 'all') => {
    const params = new URLSearchParams(searchParams.toString());
    if (type === 'all') {
      params.delete('category');
    } else {
      params.set('category', type);
    }
    router.push(`/errand?${params.toString()}`);
  };

  return {
    currentCategory: searchParams.get('category') as ErrandCategory,
    onCurrentCategory,
  };
};
