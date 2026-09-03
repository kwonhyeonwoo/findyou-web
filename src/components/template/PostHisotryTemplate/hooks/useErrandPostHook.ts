import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CustomStatus } from '@/interfaces/common.interface';
import { useGetMyErrandsQuery } from '@/hooks/quires/errand/useGetMyErrandsQuery';
import { useUser } from '@/store/useUserStore';
import { useApplicationStatusMutation } from '@/hooks/mutations/errandApplication/useApplicationStatusMutation';


export interface SelectedApplication {
  applicationId: string;
  nickName: string;
  helperId: string;
}

export const useErrandPostHook = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { userId } = useUser();
  const { mutate } = useApplicationStatusMutation();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [selectedApplicant, setSelectedApplicant] =
    useState<SelectedApplication | null>(null);
  const [isBottomOpen, setIsBottomOpen] = useState<boolean>(false);
  const { data: errandData } = useGetMyErrandsQuery();
  const handleSatusActive = ({
    idx,
    id,
    status,
  }: {
    idx: number | null;
    id?: string;
    status: CustomStatus;
  }) => {
    if (status === CustomStatus.PENDING) {
      setCurrentIdx(idx);
      setIsBottomOpen((prev) => !prev);
    } else if (status === CustomStatus.IN_PROGRESS) {
      router.push(`/errand/progress/${id}`);
    } else if (status === CustomStatus.COMPLETED) {
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

  const handleAccepted = ({
    applicationId,
    helperId,
  }: {
    applicationId: string;
    helperId: string;
  }) => {
    mutate({ applicationId });
    setSelectedApplicant(null);
    // router.push(`/helper/${helperId}}`);
  };

  const handleHelperProfile = (helperId: string) => {
    router.push(`/helper/${helperId}`);
  };

  const handleErrandDetailActive = (errandId: string) => {
    router.push(`/errand/${errandId}`);
  };
  return {
    errandData,
    isBottomOpen,
    currentIdx,
    selectedApplicant,
    userId,
    dataType: searchParams.get('type'),
    handleErrandDetailActive,
    setSelectedApplicant,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleAccepted,
    handleSatusActive,
  };
};
