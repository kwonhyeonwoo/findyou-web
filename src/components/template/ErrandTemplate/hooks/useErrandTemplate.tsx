import { ErrandStatus } from '@/interfaces/errand.interface';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const useErrandTemplate = () => {
  const router = useRouter();
  const [status, setStatus] = useState<ErrandStatus | undefined>(undefined);

  const handleStatusChange = (status: ErrandStatus | undefined) => {
    setStatus(status);
  };
  const handleRouter = (id: string) => router.push(`/errand/${id}`);
  return {
    status,
    handleStatusChange,
    handleRouter,
  };
};
