import { ErrandStatus } from '@/interfaces/errand.interface';
import { ErrandCategory } from '@/schema/errand.schema';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

export const useErrandSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      const value = e.currentTarget.value;

      if (value.trim()) {
        params.set('keyword', value);
      } else {
        params.delete('keyword');
      }

      router.push(`/errand?${params.toString()}`);
    }
  };

  const handleCurrentCategory = (type: ErrandCategory | 'all') => {
    if (type === 'all') {
      params.delete('category');
    } else {
      params.set('category', type);
    }
    router.push(`/errand?${params.toString()}`);
  };

  const handleStatusChange = (status: ErrandStatus | undefined) => {
    if (status === undefined) {
      params.delete('status');
    } else {
      console.log('status', status);
      params.set('status', status);
    }
    router.push(`/errand?${params.toString()}`);
  };
  const handleRouter = (id: string) => router.push(`/errand/${id}`);
  return {
    keyword: searchParams.get('keyword') || '',
    currentCategory: searchParams.get('category') as ErrandCategory,
    status: (searchParams.get('status') as ErrandStatus) || undefined,
    handleRouter,
    handleStatusChange,
    handleCurrentCategory,
    handleKeydown,
  };
};
