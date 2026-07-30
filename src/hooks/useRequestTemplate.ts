import { ErrandStatus } from '@/interfaces/errand.interface';
import { useApplicationStatusMutation } from './quires/errand-application/useApplicationStatusMutation';
import { useGetMyErrandsQuery } from './quires/errand/useGetMyErrandsQuery';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const useRequestTemplate = () => {
  const router = useRouter();
  const { mutate } = useApplicationStatusMutation();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isBottomOpen, setIsBottomOpen] = useState<boolean>(false);
  const { data } = useGetMyErrandsQuery();

  const handleActive = ({
    idx,
    id,
    status,
  }: {
    idx: number | null;
    id?: string;
    status: ErrandStatus;
  }) => {
    if (status === ErrandStatus.MATCHING) {
      setCurrentIdx(idx);
      setIsBottomOpen((prev) => !prev);
    } else if (status === ErrandStatus.IN_PROGRESS) {
      router.push(`/errand/status/${id}`);
    } else if (status === ErrandStatus.COMPLETED) {
    }
  };
  const handleModalOpen = () => setIsModalOpen(true);
  const handleApplicationUpdate = (id: string, errandId: string) => {
    mutate({ id });
    router.push(`/errand/status/${errandId}`);
  };
  const handleHelperProfile = (helperId: string) => {
    router.push(`/helper/${helperId}`);
  };
  return {
    data,
    isBottomOpen,
    currentIdx,
    isModalOpen,
    setIsModalOpen,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleApplicationUpdate,
    handleActive,
  };
};
