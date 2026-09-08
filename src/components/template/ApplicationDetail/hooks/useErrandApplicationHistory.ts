import { useDeleteErrandApplication } from '@/hooks/mutations/errand-application/useDeleteErrandApplication';
import { useGetErrandApplicationsQuery } from '@/hooks/quires/errand-application/useGetErrandApplicationsQuery';
import { CustomStatus } from '@/interfaces/common.interface';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export const useErrandApplicationHistory = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: errandApplications } = useGetErrandApplicationsQuery();
  const { mutate: applicationDelete } = useDeleteErrandApplication();
  const [currApplicationId, setCurrApplicationId] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleErrandDetailActive = (errandId: string) => {
    router.push(`/errand/${errandId}`);
  };
  const handleDeleteApplication = () => {
    applicationDelete(currApplicationId);
  };
  const handleStatusActive = ({
    status,
    currApplicationId,
    errandId,
  }: {
    status: CustomStatus;
    currApplicationId: string;
    errandId: string;
  }) => {
    if (status === CustomStatus.PENDING) {
      // 대기 중
      setCurrApplicationId(currApplicationId);
      setIsModalOpen(true);
    } else if (status === CustomStatus.ACCEPTED) {
      // 수락
      router.push(`/errand/progress/${errandId}`);
    } else if (status === CustomStatus.COMPLETED) {
      router.push(`/errand/${currApplicationId}/review`);
    }
  };

  return {
    errandApplications,
    isModalOpen,
    type: searchParams.get('type'),
    handleDeleteApplication,
    setIsModalOpen,
    handleStatusActive,
    handleErrandDetailActive,
  };
};
