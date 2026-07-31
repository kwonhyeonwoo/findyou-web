import { ErrandStatus } from '@/interfaces/errand.interface';
import { useApplicationStatusMutation } from './quires/errand-application/useApplicationStatusMutation';
import { useGetMyErrandsQuery } from './quires/errand/useGetMyErrandsQuery';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export interface SelectedApplication {
  applicationId: string;
  nickName: string;
  helperId: string;
}

export const useRequestTemplate = () => {
  const router = useRouter();
  const { mutate } = useApplicationStatusMutation();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [selectedApplicant, setSelectedApplicant] =
    useState<SelectedApplication | null>(null);
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
  const handleModalOpen = ({
    applicationId,
    nickName,
    helperId,
  }: SelectedApplication) => {
    setSelectedApplicant({
      applicationId,
      nickName,
      helperId,
    });
  };

  const handleApplicationUpdate = ({
    applicationId,
    helperId,
  }: {
    applicationId: string;
    helperId: string;
  }) => {
    mutate({ applicationId });
    setSelectedApplicant(null);
    router.push(`/helper/${helperId}}`);
  };

  const handleHelperProfile = (helperId: string) => {
    router.push(`/helper/${helperId}`);
  };
  return {
    data,
    isBottomOpen,
    currentIdx,
    selectedApplicant,
    setSelectedApplicant,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleApplicationUpdate,
    handleActive,
  };
};
